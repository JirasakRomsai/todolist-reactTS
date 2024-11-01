import { FC, useState } from 'react';
import classes from './TodoHeader.module.scss';
import TodoModify from './TodoModify';
import { useAppSelector } from '../../store/hooks';
import { selectComplete } from '../../store/todo/selector';
import { IoAddCircleSharp } from 'react-icons/io5';

const TodoHeader: FC = () => {
	const [isActive, setIsActive] = useState(false);
	const complete = useAppSelector(selectComplete);

	const toggleNavbar = () => {
		setIsActive((prev) => !prev);
	};

	const closeNavbar = () => {
		setIsActive(false);
	};

	let classProgress = '';
	if (complete.count > 0 && complete.complete > 0) {
		if (complete.complete < complete.count) {
			classProgress = classes.inProgress;
		} else if (complete.complete === complete.count) {
			classProgress = classes.success;
		}
	}

	return (
		<div>
			<div className={`${classes.summary} flex justify-center`}>
				<div className='flex flex-col justify-center pr-12'>
					<p> Take done</p>
					<p>Keep it up</p>
				</div>
				<div className={`${classes.circle} ${classProgress} flex`}>
					{complete.complete}/{complete.count}
				</div>
			</div>
			<div className='flex justify-end mt-3 mb-3'>
				<button className={`${classes.toggleBtn}`} onClick={toggleNavbar}>
					<IoAddCircleSharp color='white' size={25} />
				</button>
				{isActive && <TodoModify isActive={isActive} onClose={closeNavbar} />}
			</div>
		</div>
	);
};

export default TodoHeader;
