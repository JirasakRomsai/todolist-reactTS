import { FC } from 'react';
import TodoItem from './TodoItem';
import {useAppSelector } from '../../store/hooks';

const ToDolist: FC = () => {
	const todoItems = useAppSelector((state) => state.todo.items);
	const hasTodo = todoItems && todoItems.length > 0;

	if (!hasTodo) {

		return <div className='grid gap-4'>Loading...</div>;

	} else {

		return (
			<div className='grid gap-4'>
				{todoItems.map((item) => (
					<TodoItem key={item.id} itemId={item.id} />
				))}
			</div>
		);
    
	}
};

export default ToDolist;
