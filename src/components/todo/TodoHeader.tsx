import { FC, useEffect, useState, useRef } from "react";
import classes from './TodoHeader.module.scss';

const TodoHeader: FC = () => {
    const [isActive, setIsActive] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null);;


    const toggleNavbar = () => {
        setIsActive((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className={`${classes.summary} flex justify-center`}>
                <div className="flex flex-col justify-center pr-12">
                    <p> Take done</p>
                    <p>Keep it up</p>
                </div>
                <div className={`${classes.circle}  flex`}>
                    2/3
                </div>
            </div>
            <div className="flex justify-end">
                <button className={`${classes.toggleBtn}`} onClick={toggleNavbar}>
                    {'+'}
                </button>
                <div
                    ref={navbarRef}
                    className={`${classes.navbar} ${isActive ? classes.active : ''}`}
                >
                    <div className="flex justify-start">
                        <button onClick={toggleNavbar}>{'back'}</button>
                    </div>
                    <div className="h-full">
                        c
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TodoHeader