import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todos/todo';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sk-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  title: string = '';

  toggleStatus(): void {
    this.update.emit({
      completed: !this.todo.completed
    });
  }
}
