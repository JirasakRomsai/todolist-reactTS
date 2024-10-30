import { FC, useRef, useEffect, useState } from 'react';
import classes from './TodoModify.module.scss';
import { createPortal } from 'react-dom';
import Input, { InputForwardRefProps } from './UI/Input';
import { TodoModel } from './model/todoModel';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { todoAction } from '../../store/todo/slice.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { selectTodoById } from '../../store/todo/selector.ts';

interface TodoModifyProps {
	isActive: boolean;
	editedId?: string;
	onClose: () => void;
}

const TodoModify: FC<TodoModifyProps> = ({ isActive, editedId, onClose }) => {
	const navbarRef = useRef<HTMLDivElement>(null);
	const descriptionInputRef = useRef<InputForwardRefProps>(null);
	const [todoForm, setTodoForm] = useState<TodoModel | null>(null);
	const dispatch = useAppDispatch();
	const todoItem = editedId ? useAppSelector(selectTodoById(editedId)) : null;

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
				onClose();
			}
		};

		if (isActive) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isActive]);

	useEffect(() => {
		if (editedId !== null && todoItem !== null) {
			const todoUpdate = { ...todoItem };
			todoUpdate.updatedAt = new Date();
			descriptionInputRef.current?.setValue(todoUpdate.title);

			setTodoForm(todoUpdate);
		} else {
			setTodoForm(new TodoModel());
		}
	}, []);

	const handlerSubmit = () => {
		if (editedId) {
			updateTodo();
		} else {
			newTodo();
		}
		onClose();
	};

	const newTodo = () => {
		if (todoForm !== null) {
			todoForm.id = uuidv4();
			todoForm.title = descriptionInputRef?.current?.getValue() ?? '';

			dispatch(todoAction.addTodo(JSON.stringify(todoForm)));
		}
	};

	const updateTodo = () => {
		if (todoForm !== null) {
			todoForm.title = descriptionInputRef?.current?.getValue() ?? '';

			dispatch(todoAction.updateTodo(JSON.stringify(todoForm)));
		}
	};

	let formattedUpdatedAt = '';
	let formattedCreatedAt = '';

	if (todoForm !== null) {
		if (todoForm.updatedAt !== null && editedId) {
			formattedUpdatedAt = format(todoForm.updatedAt, 'MM/dd/yyyy h:mm a');
		}
		formattedCreatedAt = format(todoForm.createdAt, 'MM/dd/yyyy h:mm a');
	}

	return createPortal(
		<>
			{
				<div ref={navbarRef} className={`${classes.navbar} ${isActive ? classes.active : ''}`}>
					<div className='flex justify-between'>
						<button onClick={onClose}>{'back'}</button>
						<button onClick={handlerSubmit}>Save</button>
					</div>
					{isActive && (
						<div className={`${classes.content}`}>
							<div className={`${classes.textDate} flex`}>
								{!editedId ? (
									<>
										<p>Created time : </p>
										<p className='ml-3'>{formattedCreatedAt}</p>
									</>
								) : (
									<div className='flex flex-col'>
										<div className='flex'>
											<p>Created time : </p>
											<p className='ml-3'>{formattedCreatedAt}</p>
										</div>
										<div className='flex'>
											<p>Updated time : </p>
											<p className='ml-3'>{formattedUpdatedAt}</p>
										</div>
									</div>
								)}
							</div>
							<Input ref={descriptionInputRef} placeHolder='Descrption' />
						</div>
					)}
				</div>
			}
		</>,
		document.getElementById('sidebar-root') as HTMLElement
	);
};

export default TodoModify;
