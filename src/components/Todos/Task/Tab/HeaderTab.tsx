import { FC, useState } from "react";
import { Box, Tab } from '@mui/material';
import { TabList } from '@mui/lab';

const HeaderListTask: FC = () => {

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Board View" value="1" />
                <Tab label="Table" value="2" />
            </TabList>
            <div className="flex items-center">
                +
            </div>
        </Box>
    )
}


export default HeaderListTask