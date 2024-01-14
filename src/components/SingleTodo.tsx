import react, { useState,useRef,useEffect} from "react";
import { Todo } from "../models/model";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdDoneOutline } from "react-icons/md";
import "./styles.css"
import { Draggable } from "react-beautiful-dnd";


type Props = {
    index:number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({index , todo, todos, setTodos }: Props) => {
    const[edit,setEdit] =useState<boolean>(false);
    const[editTodo,setEditTodo] =useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
          )
        );
      };
      const handleDelete= (id:number)=>{
        setTodos(todos.filter((todo)=> todo.id !==id));
      }
      const handleEdit= (e:React.FormEvent,id:number)=>{
        e.preventDefault();
        setTodos(todos.map((todo)=>(
            todo.id === id ? { ...todo, todo:editTodo}:todo
        )))
        setEdit(false)
      };
      const inputRef = useRef<HTMLInputElement>(null);


      useEffect(()=>{
        inputRef.current?.focus();
      },[edit]);
      
    return (
        <Draggable draggableId={todo.id.toString() index={index}}>
            {
                ()=>(
                    
                )
            }
            
            
            <form className="todos_single" onSubmit={(e)=>handleEdit(e,todo.id)}>

        {
            edit ? (
                <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos_single--text"/>
            ):(
                
            todo.isDone ? (
                <s className="todos_single--text">{todo.todo}</s>
            ):(
                <span className="todos_single--text">{todo.todo}</span>
            )
        
            )
        }
        
        
        <div>
            <span className="icon" onClick={ () =>{
                if(!edit && !todo.isDone){
                    setEdit(!edit)
                }
            }}
            >
                <FaEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
                <MdDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDoneOutline />
            </span>
        </div>
    </form>
    </Draggable>
        
    );
};

export default SingleTodo;

