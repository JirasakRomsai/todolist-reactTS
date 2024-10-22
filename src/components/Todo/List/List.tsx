import { FC } from 'react';
import classes from './List.module.scss';
import Item from './Item';

const List: FC = () => {
    return (
        <div className={classes.List}>
            <Item />
        </div>
    )
}

export default List