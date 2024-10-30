import { PayloadAction } from '@reduxjs/toolkit';
import { TodoModel } from '../../components/todo/model/todoModel'
import { ITodoState } from './state'

const reducer = {
  initialTodo(state: ITodoState) {
    const todos = localStorage.getItem('todos');

    if (todos) {
      state.items = JSON.parse(todos) as TodoModel[]
    }
  },
  addTodo(state: ITodoState, actions: PayloadAction<string>) {
    const todo = JSON.parse(actions.payload) as TodoModel
    state.items.push(todo);

    localStorage.setItem('todos', JSON.stringify(state.items));
  },
  updateTodo(state: ITodoState, actions: PayloadAction<string>) {
    const todo = JSON.parse(actions.payload) as TodoModel

    const indexOld = state.items.findIndex(item => item.id === todo.id);

    if (indexOld !== -1) {
      state.items[indexOld] = todo;
      localStorage.setItem('todos', JSON.stringify(state.items));
    }
  },
  deleteTodo(state: ITodoState, actions: PayloadAction<string>) {
    const id = actions.payload

    state.items = state.items.filter(item => item.id !== id)

    localStorage.setItem('todos', JSON.stringify(state.items));
  },
}


export default reducer