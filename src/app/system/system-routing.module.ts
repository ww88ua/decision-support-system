import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {TasksPageComponent} from './tasks-page/tasks-page.component';
import {ExpertsPageComponent} from './experts-page/experts-page.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {AddTaskFirstStepComponent} from './add-task/add-task-first-step/add-task-first-step.component';
import {AddTaskSecondStepComponent} from './add-task/add-task-second-step/add-task-second-step.component';
import {AddTaskThirdStepComponent} from './add-task/add-task-third-step/add-task-third-step.component';
import {AddTaskFourthStepComponent} from './add-task/add-task-fourth-step/add-task-fourth-step.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
      {path: 'tasks', component: TasksPageComponent},
      {path: 'experts', component: ExpertsPageComponent},
      {path: 'add-task', component: AddTaskComponent, children: [
          {path: 'first-step', component: AddTaskFirstStepComponent},
          {path: 'second-step', component: AddTaskSecondStepComponent},
          {path: 'third-step', component: AddTaskThirdStepComponent},
          {path: 'fourth-step', component: AddTaskFourthStepComponent}
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {

}
