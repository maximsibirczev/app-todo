import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '',   redirectTo: '/tasks', pathMatch: 'full' },
	{ path: 'tasks', loadChildren: () => import(`./pages/tasks/tasks.module`).then(m => m.TasksModule) },
	{ path: '**', redirectTo: '/tasks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
