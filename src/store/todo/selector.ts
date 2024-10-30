import { TodoModel } from '../../components/todo/model/todoModel';
import { RootState } from '../index'
import { createSelector } from 'reselect';

export const selectTodoById = (id: string) => (state: RootState): TodoModel | null => {
  const todo = state.todo.items.find(todo => todo.id === id)
  return todo ? todo : null;
}

export const selectComplete = createSelector([(state: RootState) => state.todo.items],
  (items): { complete: number, count: number } => {
    return {
      complete: items.filter(todo => todo.completed === true).length,
      count: items.length,
    };
  }
);

