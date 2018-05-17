import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../../shared/services/task.service';
import {Task} from '../../../../shared/models/task.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Criteria} from '../../../../shared/models/criteria.model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.sass']
})
export class EvaluationComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  currentTask: Task = new Task(null, null ,null, null, null);
  taskId: string;
  criterias: Array<Criteria> = new Array<Criteria>();
  questions: Array<String>;
  answers: Array<number[]> = new Array<number[]>();
  equalsButtonSelected: Array<boolean> = new Array<boolean>();

  ngOnInit() {

      this.taskId = this.route.snapshot.paramMap.get('id');

    this.taskService.getTaskById(this.taskId)
      .subscribe((task: Task) => {
        this.currentTask = task;
        this.criterias = task.criterias;
        this.questions = this.setQuestions(this.criterias);
      });

  }

  setQuestions(criterias: Array<Criteria>) {
    let questions = [];
    let criteriasNew = criterias;
    for (let i = 0; i < criterias.length; i++) {
      let currentElement = i;

      for (let j = i+1; j < criterias.length; j++) {
        questions.push([criteriasNew[currentElement], criterias[j]]);
      }
    }
    return questions;
  }

  setEqualsButtonSelected(id: number) {
    this.equalsButtonSelected[id] = !this.equalsButtonSelected[id];
  }

  setAnswer(answer: number, numOfQuestion: number, numOfCriteria?: number) {
    let ans = [answer, numOfQuestion, numOfCriteria];
    if (this.answers.length === 0) {
      this.answers.push(ans);
    } else {
      if (this.answers[numOfQuestion] === undefined) {
        this.answers.push(ans);
      } else {
        this.answers[numOfQuestion] = ans;
      }

      // for (let answ of this.answers) {
      //   if (answ[1] === numOfQuestion) {
      //     console.log('equals');
      //   } else {
      //     console.log('added 2');
      //     this.answers.push(ans);
      //   }
      // }
    }
    //this.setEqualsButtonSelected(numOfQuestion);

  }

  saveAnswers() {
    this.answers = JSON.parse(window.localStorage.getItem('answers'));
    console.log(this.answers);
    let resultArray = [];
    for (let i = 0; i < this.criterias.length; i++) {
      resultArray[i] = [];
    }
    //console.log(resultArray);




        for (let j = 0; j < this.criterias.length; j++) {
          let currentElement = j;
          for (let k = j+1; k < this.criterias.length; k++) {
            for (let i = 0; i < this.answers.length; i++) {
              resultArray[j][k] = 0;
              if (this.answers[i][2] === 0) {
                resultArray[j][k] = this.answers[j][0];
              } else if (this.answers[i][2] === undefined) {
                resultArray[k][k] = 1;
                resultArray[k][j] = 1;
              } else {
                resultArray[k][j] = 1/this.answers[j][0];
              }
              resultArray[j][currentElement] = 1;
            }
          }


        }



    console.log(resultArray);
  }


}
