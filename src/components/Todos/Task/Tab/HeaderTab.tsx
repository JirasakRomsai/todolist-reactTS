// HeaderTabs.tsx
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface HeaderTabsProps {
	value: number;
	onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ value, onChange }) => {
	return (
		<div>
			<Tabs value={value} onChange={onChange} aria-label='basic tabs example'>
				<Tab label='Item One' />
				<Tab label='Item Two' />
				<Tab label='Item Three' />
			</Tabs>
		</div>
	);
};

export default HeaderTabs;
