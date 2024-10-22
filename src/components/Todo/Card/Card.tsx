import { FC } from 'react';
import classes from './Card.module.scss';
import Title from './Title';
import ButtonAdd from './ButtonAdd';
import List from '../List/List';
import TaskNew from '../Task/TaskNew';

const Card: FC = () => {
    return (
        <div className={`${classes.card}`}>
            {/* s */}
            {/* <TaskNew /> */}
            <List />
        </div>
    )
}

export default Card