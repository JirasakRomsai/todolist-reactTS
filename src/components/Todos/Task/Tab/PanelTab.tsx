import * as React from 'react';
import Box from '@mui/material/Box';

interface PanelTabProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const PanelTab: React.FC<PanelTabProps> = ({ children, value, index }) => {
	return (
		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} style={{ padding: '0px' }}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
};

export default PanelTab;
