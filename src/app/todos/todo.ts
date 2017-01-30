/* tslint:disable:no-string-literal */
import * as firebase from 'firebase';

export interface BaseTodo {
  $key?: string;
  completed: boolean;
  createdAt: number;
  title: string;
}

export class Todo implements BaseTodo {
  completed: boolean = false;
  createdAt: number = firebase.database.ServerValue.TIMESTAMP as number;
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
