import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BaseTodo } from '../todos/todo';

@Component({
  selector: 'sk-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: FirebaseListObservable<BaseTodo[]>;

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);
}
