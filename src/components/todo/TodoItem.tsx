import { FC, useEffect, useState } from 'react';
import classes from './TodoItem.module.scss';
import TodoModify from './TodoModify';
import { selectTodoById } from '../../store/todo/selector';
import { useAppSelector, useAppDispatch } from '../../store/hooks.ts';
import { todoAction } from '../../store/todo/slice.ts';

interface TodoItemProps {
	itemId: string;
}

const TodoItem: FC<TodoItemProps> = ({ itemId }) => {
	const [checked, setChecked] = useState<boolean>(false);
	const [isActive, setIsActive] = useState(false);
	const todoItem = useAppSelector(selectTodoById(itemId));
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (todoItem) {
			setChecked(todoItem.completed && true);
		}
	}, []);

	const handleChecked = () => {
		setChecked((prev) => !prev);
		if (todoItem) {
			const updateTodo = { ...todoItem };

			updateTodo.completed = !updateTodo.completed;

			dispatch(todoAction.updateTodo(JSON.stringify(updateTodo)));
		}
	};

	const toggleNavbar = () => {
		setIsActive((prev) => !prev);
	};

	const closeNavbar = () => {
		setIsActive(false);
	};

	const handlerDelete = () => {
		dispatch(todoAction.deleteTodo(itemId));
	};

	return (
		<>
			<div className='flex flex-col'>
				<div className={`${classes.item} flex justify-between items-center`}>
					<div className='flex'>
						<div className={`${classes.checked} ${checked && classes.active}`} onClick={handleChecked} />
						<div className={`${classes.title}`}>{todoItem?.title}</div>
					</div>
					<div>
						<button className='ml-3' onClick={toggleNavbar}>
							edit
						</button>
						<button className='ml-3' onClick={handlerDelete}>
							delete
						</button>
					</div>
				</div>
			</div>
			{isActive && <TodoModify isActive={isActive} onClose={closeNavbar} editedId={itemId} />}
		</>
	);
};

export default TodoItem;
