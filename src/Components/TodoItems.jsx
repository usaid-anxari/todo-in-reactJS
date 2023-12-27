import React from 'react'
import './Css/TodoItems.css'
import not_tick from './Assets/not_tick.png'
import tick from './Assets/tick.png'
import cross from './Assets/cross.png'

const TodoItems = ({no,text,display,setTodos}) => {
  const removeItems = (no)=>{
    let data = JSON.parse(localStorage.getItem('todos'));
    data = data.filter((todo)=> todo.no!==no);
    setTodos(data)
  }
  const toggle = (no)=>{
    let data = JSON.parse(localStorage.getItem('todos'));
    for(let i=0; i < data.length;i++)
    {
      if(data[i].no===no){
        if (data[i].display==='') {
          data[i].display = 'line-through';
        }
        else
        {
          data[i].display = '';
        }
        break;
      } 
    }
    setTodos(data); 	
  }
  return (
    <div className='todo-items'>
      <div className={`todo-container ${display}`} onClick={()=>{toggle(no)}}>
       {display=== ""? <img src={not_tick} alt="" />: <img src={tick} alt="" />} 
        <div className="todo-text">{text}</div>
      </div>
      <img className='cross-icon' onClick={()=>{removeItems(no)}} src={cross} alt="" />
    </div>
  )
}

export default TodoItems