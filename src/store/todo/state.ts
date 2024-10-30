import { TodoModel } from '../../components/todo/model/todoModel'

export interface ITodoState {
  items: TodoModel[];
}

export const todoState: ITodoState = {
  items: [],
};