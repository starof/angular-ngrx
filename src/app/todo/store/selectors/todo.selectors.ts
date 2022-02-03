import { adapter } from './../reducers/todo.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from '../reducers/todo.reducer';

export const selectTodoState = createFeatureSelector<fromTodo.State>(
  fromTodo.todoFeatureKey
);

const { selectIds, //获取id集合，以数组形式呈现
  selectEntities,//获取实体集合，以字典形式呈现
  selectAll, //获取所有数据，以数组形式呈现
  selectTotal //获取数据条数
} = adapter.getSelectors();
export const selectTodos = createSelector(selectTodoState, selectAll);