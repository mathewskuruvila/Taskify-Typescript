import react from "react";
import {Todo} from "../models/model"


type Props = {
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
};


const SingleTodo = ({todo,todos,setTodos})=>{
    return (
        <div>

        </div>
    )

}
export default SingleTodo;