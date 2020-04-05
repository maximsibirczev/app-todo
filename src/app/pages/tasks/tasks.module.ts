import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksIndexComponent } from './tasks-index/tasks-index.component';
import { TasksNewComponent } from './tasks-new/tasks-new.component';
import { TasksIdComponent } from './tasks-id/tasks-id.component';

import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TasksIndexComponent,
    TasksNewComponent,
    TasksIdComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class TasksModule { }
