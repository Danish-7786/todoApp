import { useEffect, useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import { Todoprovider,TodoContext,useTodo } from './context'

import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo)=> {
    setTodos(
     (prev)=> [todo,...prev])
     localStorage.setItem("todo",todos)
    // we get all the previous todos access
    // setTodos(todo)
    // cause if we do this directly then it will delete all previous todos and save new onr
    
  }

  const updateTodo = (id,todo)=> {
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo )))

  }

  const deleteTodo=(id)=> {
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id))
  }

  const toggleComplete= (id)=> {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=> {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])
 useEffect(()=> {
  localStorage.setItem("todos",JSON.stringify(todos))
 },[todos])

  return (
   <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="w-screen h-screen flex flex-col items-center bg-slate-200" >
<div className='pb-4'>

    <AddTodo/>
</div>
    
    <div className='w-[95%] flex flex-col gap-2'>
    {todos.map((todo)=> (
        // console.log(todo)
        // () are used for auto return 
        // {} are used for normal return where you have to specify 
        // value wih return keyword
        // while mapping through the array use key cause it will improve 
        // the efficiency of code

        <div key= {todo.id}>
          <TodoItem todo={todo}/>
        </div>
        )
        )
      }
    </div>
    </div>
   </Todoprovider>
  )
}

export default App
