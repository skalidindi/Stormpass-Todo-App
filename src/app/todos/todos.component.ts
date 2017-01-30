import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable } from 'rxjs/Observable';
import { TodoService } from './todos.service';

@Component({
  selector: 'sk-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosPageComponent {

  constructor(private todoService: TodoService) {
  }

}
