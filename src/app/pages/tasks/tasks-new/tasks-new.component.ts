import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../shared/services/tasks.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tasks-new',
  templateUrl: './tasks-new.component.html',
  styleUrls: ['./tasks-new.component.scss']
})
export class TasksNewComponent implements OnInit {

	newTaskText:string;

  constructor(
    public tasksService: TasksService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  createTask(text){
  	this.tasksService.createTask(text);
  	this.newTaskText = ''
    this.router.navigate(['tasks']);
  }

}
