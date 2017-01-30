import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { FirebaseService } from '../firebase/firebase.service';
import { BaseTodo, Todo } from './todo';


@Injectable()
export class TodoService {
  private todos$: FirebaseListObservable<BaseTodo[]>;
  private path: string;

  constructor(private angularFire: AngularFire, private firebaseService: FirebaseService) {
    const path = `/todos/${this.firebaseService.id}`;
    this.todos$ = this.angularFire.database.list(path);
  }

  public createTodo(title: string): firebase.Promise<any> {
    return this.todos$.push(new Todo(title));
  }

  public removeTodo(todo: BaseTodo): firebase.Promise<any> {
    return this.todos$.remove(todo.$key);
  }

  public updateTodo(todo: BaseTodo, changes: any): firebase.Promise<any> {
    return this.todos$.update(todo.$key, changes);
  }
}
