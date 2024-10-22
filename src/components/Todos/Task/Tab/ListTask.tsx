import { FC, useState } from "react";
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import classes from './ListTask.module.scss';

const ListTask: FC = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Board View" value="1" />
                        <Tab label="Table" value="2" />
                    </TabList>
                    <div className="flex items-center">
                        +
                    </div>
                </Box>

                <TabPanel value="1" style={{ background: 'pink', padding: '0px' }}>
                    <div style={{ background: 'orange', width: '100%' }}>
                        s
                    </div>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </>
    )
}

export default ListTask