import { FC } from "react"
import classes from './TaskNew.module.scss';

const TaskNew: FC = () => {
    return (
        <div className={classes.taskNew}>


            <div className={classes.inputTitle}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" name="title" />
            </div>

            <textarea className={classes.inputDesc}></textarea>
        </div>
    )
}

export default TaskNew