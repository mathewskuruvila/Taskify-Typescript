import React ,{useState} from 'react';
import "./App.css";
import InputFeild from "./components/InputFeild";
import {Todo} from "./models/model";
import TodoList from './components/TodoList';
import { FaEdit } from "react-icons/fa";


const App: React.FC= ()=>{

  const [todo,setTodo] =useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);

  const handleAdd=(e:React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, { id :Date.now(),todo,isDone:false}]);
      setTodo("");
    }
  }


  console.log(todo);
  return(
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos ={setTodos}/>
      
    </div>
  )
}

export default App

