import { FC, useRef, useEffect } from 'react';
import { Popper, Box, Fade } from '@mui/material';

interface PopoverAddGroupBoardProps {
	anchorEl?: HTMLElement | null;
	open: boolean;
	onClose: () => void;
}

const PopoverAddGroupBoard: FC<PopoverAddGroupBoardProps> = ({ anchorEl, open, onClose }) => {
	const popoverRef = useRef<HTMLDivElement | null>(null);
	const canBeOpen = open && Boolean(anchorEl);
	const id = canBeOpen ? 'popper-add-group-board' : undefined;

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClose]);

	return (
		<Popper id={id} open={open} anchorEl={anchorEl} transition>
			{({ TransitionProps }) => (
				<Fade {...TransitionProps} timeout={350}>
					{/* 	<Box ref={popoverRef} sx={{ border: 1, p: 2, bgcolor: 'background.paper' }}>
						<input type='text' placeholder='New group' />
						<button onClick={onClose}>Done</button>
					</Box> */}
					<div ref={popoverRef}>
						<input type='text' placeholder='New group' />
						<button onClick={onClose}>Done</button>
					</div>
				</Fade>
			)}
		</Popper>
	);
};

export default PopoverAddGroupBoard;
