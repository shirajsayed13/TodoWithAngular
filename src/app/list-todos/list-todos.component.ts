import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Java', false, new Date),
    new Todo(2, 'Learn Python', false, new Date),
    new Todo(3, 'Learn C++', false, new Date),
    new Todo(14, 'Learn Math', false, new Date)

    // { id: '1', description: 'Learn Angular' },
    // { id: '2', description: 'Learn Java' },
    // { id: '3', description: 'Learn Python' }
  ]

  // todo = {
  //   id : '1',
  //   description : "Learn To Dance"
  // }

  constructor() { }

  ngOnInit() {
  }

}
