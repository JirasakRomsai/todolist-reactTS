import { FC } from "react"
import HeaderTask from './Task/HeaderTask';
import ListTask from './Task/ListTask';

import classes from './Index.module.scss';

const IndexTodo: FC = () => {
    return (
        <main className={classes.index}>
            <HeaderTask />
            <ListTask />
        </main>
    )
}


export default IndexTodo