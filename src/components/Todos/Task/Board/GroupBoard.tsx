import { FC } from 'react';
import classes from './GroupBoard.module.scss';
import Page from './Page';

interface GroupBoardProps {
	className?: string;
}

const GroupBoard: FC<GroupBoardProps> = ({ className }) => {
	return (
		<div className={`${classes.groubBoard} ${className} flex flex-col  bg-slate-600`}>
			<div className='flex justify-between'>
				<div>groupName</div>
				<div className={`${classes.action}`}>
					<button type='button' className='mr-2'>
						O
					</button>
					<button type='button'>+</button>
				</div>
			</div>
			<div className='grid grid-cols-none gap-2'>
				<Page />
				<Page />
			</div>
		</div>
	);
};

export default GroupBoard;
