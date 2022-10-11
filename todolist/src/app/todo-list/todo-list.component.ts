import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  taskName : string = '';
  tasks : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  setTaskName(name : any) {
    this.taskName = name.target.value;
  }

  addTask() {
    this.tasks.push(this.taskName);
    this.taskName = '';
  }

  editTask(task : string) {
    this.taskName = task;
    this.tasks = this.tasks.filter(t => t !== task);
  }

  deleteTask(task : string) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
      }
    }
  }
  

}
