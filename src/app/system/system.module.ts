import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { ExpertsPageComponent } from './experts-page/experts-page.component';
import {SystemComponent} from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {DropdownDirective} from './shared/directives/dropdown.directive';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddTaskFirstStepComponent } from './add-task/add-task-first-step/add-task-first-step.component';
import { AddTaskSecondStepComponent } from './add-task/add-task-second-step/add-task-second-step.component';
import { AddTaskThirdStepComponent } from './add-task/add-task-third-step/add-task-third-step.component';
import { AddTaskFourthStepComponent } from './add-task/add-task-fourth-step/add-task-fourth-step.component';

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
    AddTaskFourthStepComponent
  ]
})

export class SystemModule {}
