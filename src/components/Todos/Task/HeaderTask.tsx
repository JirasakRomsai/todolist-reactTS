import { FC } from "react"
import classes from './HeaderTask.module.scss';

const HeaderTask: FC = () => {
    return (
        <section className={classes.header}>
            <h1 className="">Task List</h1>
            <p>Use this template to track your personal tasks.
                Click + New to create a new task directly on this board.
                Click an existing task to add additional context or subtasks
            </p>
        </section>
    )
}


export default HeaderTask