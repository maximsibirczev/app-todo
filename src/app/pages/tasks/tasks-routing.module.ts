import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksIndexComponent } from './tasks-index/tasks-index.component';
import { TasksNewComponent } from './tasks-new/tasks-new.component';
import { TasksIdComponent } from './tasks-id/tasks-id.component';


const routes: Routes = [
    { 
    	path: '',
    	children:[  
    	  { path: 'new', component: TasksNewComponent},
				{ path: ':id', component: TasksIdComponent}
			],
     	component: TasksIndexComponent
     }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
