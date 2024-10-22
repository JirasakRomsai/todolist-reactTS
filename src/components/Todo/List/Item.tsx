import { FC } from "react";
import classes from './Item.module.scss';
import Button from "../UI/Button";

const Item: FC = () => {
    return (
        <div className={classes.Item}>
            <p>title</p>
            <div>
                <Button>edit</Button>
                <Button>remove</Button>
            </div>
        </div>
    )
}


export default Item