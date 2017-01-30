import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseTodo } from '../todos/todo';

@Component({
  selector: 'sk-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Output() createTodo = new EventEmitter(false);

  private title: string = '';

  addTodo(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.createTodo.emit(title);
    }
    this.title = '';
  }
}
