import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';

import {SystemComponent} from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {DropdownDirective} from './shared/directives/dropdown.directive';

import {TaskService} from '../shared/services/task.service';
import {AdminComponent} from './admin/admin.component';
import {AddTaskComponent} from './admin/add-task/add-task.component';
import {AddTaskSecondStepComponent} from './admin/add-task/add-task-second-step/add-task-second-step.component';
import {AddTaskFirstStepComponent} from './admin/add-task/add-task-first-step/add-task-first-step.component';
import {AddTaskFourthStepComponent} from './admin/add-task/add-task-fourth-step/add-task-fourth-step.component';
import {AddTaskThirdStepComponent} from './admin/add-task/add-task-third-step/add-task-third-step.component';
import {ExpertsPageComponent} from './admin/experts-page/experts-page.component';
import {TasksPageComponent} from './admin/tasks-page/tasks-page.component';
import {ExpertComponent} from './expert/expert.component';
import { TasksComponent } from './expert/tasks/tasks.component';
import { SelectedTaskPageComponent } from './admin/tasks-page/selected-task-page/selected-task-page.component';
import { EvaluationComponent } from './expert/tasks/evaluation/evaluation.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    TasksPageComponent,
    ExpertsPageComponent,
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective,
    AddTaskComponent,
    AddTaskFirstStepComponent,
    AddTaskSecondStepComponent,
    AddTaskThirdStepComponent,
    AddTaskFourthStepComponent,
    AdminComponent,
    ExpertComponent,
    TasksComponent,
    SelectedTaskPageComponent,
    EvaluationComponent
  ],
  providers: [TaskService]
})

export class SystemModule {}
