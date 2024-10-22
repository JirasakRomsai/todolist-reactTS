import { FC } from "react"
import HeaderTask from './Task/HeaderTask';

import classes from './Index.module.scss';

const IndexTodo: FC = () => {
    return (
        <main className={classes.index}>
            <HeaderTask />
        </main>
    )
}


export default IndexTodo