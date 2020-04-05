import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../shared/services/tasks.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { Task } from '../../../shared/interfaces/task.interface';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-tasks-id',
  templateUrl: './tasks-id.component.html',
  styleUrls: ['./tasks-id.component.scss']
})
export class TasksIdComponent implements OnInit {


  myForm : FormGroup;
  constructor(
    public tasksService: TasksService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngDoCheck(){
    const taskEdited = { ...this.tasksService.tasks.find((item)=>item.id ==this.route.snapshot.params.id)};
    // это костыль но он сделан т.к. у меня данные приходят не с RESTapi
    if ( !this.myForm ){
      this.myForm = new FormGroup({
        "id": new FormControl(taskEdited.id, []),
        "title": new FormControl(taskEdited.title, []),
        "complited": new FormControl(taskEdited.complited, [])
      });
     } else {
       if(this.myForm.value.id !==taskEdited.id){
        this.myForm = new FormGroup({
          "id": new FormControl(taskEdited.id, []),
          "title": new FormControl(taskEdited.title, []),
          "complited": new FormControl(taskEdited.complited, [])
        });
       }
     }
  }

  ngOnInit() {
  }

  editTask(data){
    this.tasksService.editTask(data);
    this.router.navigate(['tasks']);
  }

  removeTask(id){
    this.tasksService.removeTask(id);
    this.router.navigate(['tasks']);
  }

}
