import { Component, input, output } from '@angular/core';
import { Todo } from '../../models/todo.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  imports: [
    FormsModule
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  onToggle() {

    this.todoToggled.emit(this.todo());
  }
}
