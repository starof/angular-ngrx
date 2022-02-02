import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';

export const todoFeatureKey = 'todo';

export interface Todo {
  id: string,
  title: string
}
export interface State {
  todos: Todo[];

}

export const initialState: State = {
  todos: []
};

export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, action) => {
    return {
      ...state,
      todos: [...state.todos,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: action.title
      }]
    };
  }),

  on(TodoActions.deleteTodo, (state, action) => ({
    ...state,
    todos: (<Todo[]>state.todos).filter(todo => todo.id !== action.id)
  }))

);
