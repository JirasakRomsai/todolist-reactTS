import { FC } from "react";
import classes from './Item.module.scss';
import Button from "../UI/Button";

const Item: FC = () => {
    return (
        <div className={classes.item}>
            <p>title</p>
            <div className={classes.action}>
                <Button classes="mr-2">edit</Button>
                <Button>remove</Button>
            </div>
        </div>
    )
}


export default Item