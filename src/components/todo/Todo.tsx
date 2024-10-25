import { FC } from "react"
import TodoHeader from './TodoHeader';
import ToDolist from './ToDolist';


const Todo: FC = () => {
    return (
        <div className="flex flex-col">
            <TodoHeader />
            <ToDolist />
        </div>
    )
}

export default Todo