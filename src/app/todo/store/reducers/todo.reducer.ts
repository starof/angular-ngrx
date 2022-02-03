import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as TodoActions from '../actions/todo.actions';

export const todoFeatureKey = 'todo';

export interface Todo {
  id: string,
  title: string
}
export interface State extends EntityState<Todo> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodo,
    (state, action) => adapter.addOne({
      id: Math.random().toString(36).substring(2, 9),
      title: action.title
    }, state)
  ),

  on(TodoActions.deleteTodo,
    (state, action) => adapter.removeOne(action.id, state)
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
