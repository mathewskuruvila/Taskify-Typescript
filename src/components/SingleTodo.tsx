import react from "react";
import { Todo } from "../models/model";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDoneOutline } from "react-icons/md";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    return (
        <form className="todos_single">
            <span className="todos_single--text">{todo.todo}</span>
            <div>
                <span className="icon">
                    <FaEdit />{" "}
                </span>
                <span className="icon">
                    <MdDelete />{" "}
                </span>
                <span className="icon">
                    <MdDoneOutline />
                </span>
            </div>
        </form>
    );
};
export default SingleTodo;
