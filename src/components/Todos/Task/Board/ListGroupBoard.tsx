import { FC, useState } from 'react';
import PopoverAddGroupBoard from './PopoverAddGroupBoard';
import GroupBoard from './GroupBoard';

const ListgroupBoard: FC = () => {
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClickPopoverAdd = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		setOpen((previousOpen) => !previousOpen);
	};

	const handleClosePopoverAdd = () => {
		setOpen(false);
		setAnchorEl(null);
	};

	return (
		<div className='flex' style={{ background: 'orange', width: '100%', position: 'relative', minHeight: '100vh' }}>
			{/* 	<div className='flex items-start pl-5'>
				<button type='button' onClick={handleClickPopoverAdd}>
					+
				</button>
				<PopoverAddGroupBoard open={open} anchorEl={anchorEl} onClose={handleClosePopoverAdd} />
			</div> */}
			<GroupBoard />
			<GroupBoard className='ml-8' />
			<GroupBoard className='ml-8' />
			<GroupBoard className='ml-8' />
			<GroupBoard className='ml-8' />
			<GroupBoard className='ml-8' />
		</div>
	);
};

export default ListgroupBoard;
