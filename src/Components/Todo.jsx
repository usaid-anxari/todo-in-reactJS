import React, { useEffect, useRef, useState } from 'react'
import './Css/Todo.css'
import TodoItems from './TodoItems';

let todoNo = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputfiled = useRef(null);
  const add = () => {
    setTodos([...todos, { no: todoNo++, text: inputfiled.current.value, display: '' }]);
    inputfiled.current.value = '';
    localStorage.setItem('todo_no', todoNo);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')))
    todoNo = localStorage.getItem("todo_no")
  }, [])
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, 100)
  }, [todos])
  return (
    <div className='todo'>
      <div className='todo-header'>Todo list</div>
      <div className='todo-add'>
        <input ref={inputfiled} type="text" placeholder='Enter Your Task' className='todo-input' />
        <div onClick={() => { add() }} className="todo-add-btn">Add</div>
      </div>
      <div className="todo-list">
        {inputfiled === ''?'Enter':todos.map((items, index) => {
          return <TodoItems key={index} setTodos={setTodos} no={items.no} text={items.text} display={items.display} />
        })}
      </div>
    </div>
  )
}

export default Todo