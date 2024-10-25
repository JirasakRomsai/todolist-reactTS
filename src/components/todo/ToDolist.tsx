import { FC, useState } from "react";
import { FormControlLabel, FormControl, Radio, IconButton } from '@mui/material';
import classes from './ToDolist.module.scss';


const ToDolist: FC = () => {
    const [checked, setChecked] = useState<boolean>(false);

    function handleChecked() {
        setChecked(prev => !prev)
    }

    return (
        /*  <div className="flex flex-col">
             <div className={`${classes.task} flex justify-between items-center`}>
                 <div className={`${classes.checked} ${checked && classes.active}`} onClick={handleChecked} />
                 <div>
                     dfd
                 </div>
                 <div>
                     <button className="ml-3">edit</button>
                     <button className="ml-3">delete</button>
                 </div>
             </div>
         </div > */

        <div className="grid gap-4">
            <div className="flex flex-col">
                <div className={`${classes.task} flex justify-between items-center`}>
                    <div className="flex">
                        <div className={`${classes.checked} ${checked && classes.active}`} onClick={handleChecked} />
                        <div className="ml-5">
                            Task1
                        </div>
                    </div>
                    <div>
                        <button className="ml-3">edit</button>
                        <button className="ml-3">delete</button>
                    </div>
                </div>
            </div >
            <div className="flex flex-col">
                <div className={`${classes.task} flex justify-between items-center`}>
                    <div className="flex">
                        <div className={`${classes.checked} ${checked && classes.active}`} onClick={handleChecked} />
                        <div className="ml-5">
                            Task1
                        </div>
                    </div>
                    <div>
                        <button className="ml-3">edit</button>
                        <button className="ml-3">delete</button>
                    </div>
                </div>
            </div >
        </div>
    )
}


export default ToDolist