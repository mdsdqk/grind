import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo, TodosResponse } from '../models/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  _http = inject(HttpClient);

  constructor() { }

  getTodos() {
    return this._http.get<TodosResponse>('https://dummyjson.com/todos');
  }

  getTodo(id: number) {
    return this._http.get<Todo>(`https://dummyjson.com/todos/${id}`);
  }

  addTodo(todo: any) {
    return this._http.post('https://dummyjson.com/todos/add', todo);
  }

  updateTodo(id: number, todo: any) {
    return this._http.put(`https://dummyjson.com/todos/${id}`, todo);
  }

  deleteTodo(id: number) {
    return this._http.delete(`https://dummyjson.com/todos/${id}`);
  }
}
