import { FC, useEffect } from 'react';
import TodoHeader from './TodoHeader';
import ToDolist from './ToDolist';
import { useAppDispatch } from '../../store/hooks';
import { todoAction } from '../../store/todo/slice';

const Todo: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const initialTodo = () => {
			dispatch(todoAction.initialTodo());
		};

		initialTodo();
	}, [dispatch]);

	return (
		<div className='flex flex-col'>
			<TodoHeader />
			<ToDolist />
		</div>
	);
};

export default Todo;
