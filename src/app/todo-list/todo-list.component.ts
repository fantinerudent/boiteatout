import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public newTodo: string;
  constructor() {
  }

  // @ViewChild('newTodo') newTodo: ElementRef<string>;
  todosList: Array<{ id: string, data: string }> = [];
  ngOnInit(): void {
  }

  addTodo() {
    this.todosList.push({ id: uuidv4(), data: this.newTodo })
    this.newTodo = "";
  }

  deleteTodo(id: string) {
    const index = this.todosList.findIndex(x => x.id === id);
    this.todosList.splice(index, 1);
  }

}
