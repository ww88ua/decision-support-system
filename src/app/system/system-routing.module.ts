import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {TasksPageComponent} from './admin/tasks-page/tasks-page.component';
import {ExpertsPageComponent} from './admin/experts-page/experts-page.component';
import {AddTaskFirstStepComponent} from './admin/add-task/add-task-first-step/add-task-first-step.component';
import {AddTaskComponent} from './admin/add-task/add-task.component';
import {AddTaskSecondStepComponent} from './admin/add-task/add-task-second-step/add-task-second-step.component';
import {AddTaskThirdStepComponent} from './admin/add-task/add-task-third-step/add-task-third-step.component';
import {AddTaskFourthStepComponent} from './admin/add-task/add-task-fourth-step/add-task-fourth-step.component';
import {AdminComponent} from './admin/admin.component';
import {ExpertComponent} from './expert/expert.component';
import {TasksComponent} from './expert/tasks/tasks.component';
import {EvaluationComponent} from './expert/tasks/evaluation/evaluation.component';


const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
      {path: 'admin', component: AdminComponent, children: [
          {path: 'tasks', component: TasksPageComponent},
          {path: 'experts', component: ExpertsPageComponent},
          {path: 'add-task', component: AddTaskComponent, children: [
              {path: 'first-step', component: AddTaskFirstStepComponent},
              {path: 'second-step', component: AddTaskSecondStepComponent},
              {path: 'third-step', component: AddTaskThirdStepComponent},
              {path: 'fourth-step', component: AddTaskFourthStepComponent}
            ]}
        ]},
      {path: 'expert', component: ExpertComponent, children: [
          {path: 'tasks', component: TasksComponent},
          {path: 'evaluation/:id', component: EvaluationComponent}
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {

}
