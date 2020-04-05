import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../shared/services/tasks.service';

@Component({
  selector: 'app-tasks-index',
  templateUrl: './tasks-index.component.html',
  styleUrls: ['./tasks-index.component.scss']
})
export class TasksIndexComponent implements OnInit {

  constructor(public tasksService: TasksService) { }

  ngOnInit() {
  	this.tasksService.getTasks()
  }

}