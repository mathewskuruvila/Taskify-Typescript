import react from "react";
import { Todo } from "../models/model";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDoneOutline } from "react-icons/md";
import "./styles.css"


type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const handleDone = (id: number) => {
        setTodos(todos.map((t) => t.id === id ? { ...todo, isDone: !t.isDone } : todo));
    };

    return (
        <form className="todos_single">
            <span className="todos_single--text">{todo.todo}</span>
            <div>
                <span className="icon">
                    <FaEdit />
                </span>
                <span className="icon">
                    <MdDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDoneOutline />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;

