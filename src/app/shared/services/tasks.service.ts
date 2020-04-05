import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';


@Injectable({providedIn: 'root'})

export class TasksService{

 tasks: Task[] = [
   {id: 1, title: 'Запустить приложение', complited: true},
   {id: 2, title: 'Просмотр кода и функционала', complited: false},
   {id: 3, title: 'Оценить тестовое задание', complited: false}
 ];

 constructor(){

 }

 getTasks() {
   return this.tasks;
 }

 toggleComplite(id){
 	 this.tasks.find((item)=>item.id === id).complited = !this.tasks.find((item)=>item.id === id).complited;
 }

 createTask(text){
	let idArray = [];
	this.tasks.forEach((item)=>idArray.push(item.id))
	let idNew = Math.max.apply(null, idArray) 
	this.tasks.push({id: ++idNew, title: text, complited: false})
	alert('Задача сохранена');
 }

 editTask(data:Task){
 	this.tasks.find((item)=> item.id===data.id).complited=data.complited
 	 	this.tasks.find((item)=> item.id===data.id).title=data.title
 	alert('Задача изменена');
 }

removeTask(id) {
	this.tasks = this.tasks.filter((item)=> id !== item.id);
	alert('Задача удалена');
 }

}

