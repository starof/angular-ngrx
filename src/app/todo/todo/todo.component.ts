import { addTodo, deleteTodo } from './../store/actions/todo.actions';
import { selectTodos } from './../store/selectors/todo.selectors';
import { Todo, todoFeatureKey } from './../store/reducers/todo.reducer';

import { Store, select } from '@ngrx/store';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { State } from '../store/reducers/todo.reducer';
import { filter, fromEvent, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements AfterViewInit {

  public todos: Observable<Todo[]>;

  @ViewChild("addTodoInput") addTodoInput!: ElementRef;
  constructor(private store: Store<State>) {
    this.todos = this.store.pipe(select(selectTodos))
  }
  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.addTodoInput.nativeElement, 'keyup')
      .pipe(filter(e => e.key === "Enter"),
        tap(console.log),
        map(e => (<HTMLInputElement>e.target).value),
        filter(title => title !== ""))
      .subscribe(title=>this.store.dispatch(addTodo({title})));
  }

  deleteTodo(id: string) {
    this.store.dispatch(deleteTodo({id}))
  }

}
