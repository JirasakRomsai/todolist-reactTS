import * as React from 'react';
import Box from '@mui/material/Box';
import HeaderTabs from './HeaderTab';
import PanelTab from './PanelTab';
import ListGroupBoard from '../Board/ListGroupBoard';

export default function BasicTabs() {
	const [value, setValue] = React.useState(2);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<HeaderTabs value={value} onChange={handleChange} />
			</Box>
			<PanelTab value={value} index={0}>
				<ListGroupBoard />
			</PanelTab>
			<PanelTab value={value} index={1}>
				Item Two
			</PanelTab>
			<PanelTab value={value} index={2}>
				Item Three
			</PanelTab>
		</Box>
	);
}
