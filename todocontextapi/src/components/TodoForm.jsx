import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    const [todoMessage,setTodoMessage]=useState('');

    const {addTodo}=useTodo();

    const add = (e) => {
      e.preventDefault();
      console.log("todo msg:",todoMessage)
      if (!todoMessage) return;

      //TO UNDERSTAND HOW addTodo of TodoForm call addTodoForm of app.jsx this is the code
      // const todo='shikhar';
      // console.log(todo)
      // const addTodo=(todo)=>{
      //     const B={id:Date.now() ,...todo}
      //     console.log(B)
      // }
      // addTodo({todo,completed:false});

      addTodo({ todoMessage, completed: false }); //can also written as addTodo({ todo: todo, completed: false });
      setTodoMessage("")
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMessage}
                onChange={(e)=>setTodoMessage(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

