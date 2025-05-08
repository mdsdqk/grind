import { Component, inject, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { map, Observable } from 'rxjs';
import { Todo } from '../../models/todo.type';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  imports: [AsyncPipe, TodoItemComponent, JsonPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  _todoService = inject(TodosService);
  todos$: Observable<Todo[]> | undefined;

  ngOnInit() {
    this.todos$ = this._todoService.getTodos().pipe(map((res) => res.todos));
  }
}
