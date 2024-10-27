import React from 'react'
import { useState } from 'react'
import { PiPlusBold } from 'react-icons/pi'
import { TiDelete } from "react-icons/ti";

const App = () => {

  const [todo, setTodo] = useState([])
  const [addTodo, setAddTodo] = useState('')

  function handleInputChange(e) {
    setAddTodo(e.target.value)
  }

  function addTask() {
    if (addTodo.trim() !== '') {
    setTodo([...todo, addTodo])
    setAddTodo('')
    }
  }

  function deleteTask(index) {
    const updatedTasks = todo.filter((_, i) => i !== index)
    setTodo(updatedTasks)
  }

  return (
    <div className='menu'>
      <p className='tdl'>To-Do-List</p>
      <div className='in'>
        <input 
        value={addTodo}
        className='inp' placeholder='Enter Task' onChange={handleInputChange}></input>
        <PiPlusBold onClick={addTask} className='sbmb'/>
        </div>
      <div className='tasks'>{todo.map((el, index) => (
        <div key={index} className='tododiv'>
        <h1 className='todoh1'>{el}</h1>
        <TiDelete onClick={() => deleteTask(index)} className='todobtn'></TiDelete>
        </div>
      ))}
      </div>
    </div>
  )
}

export default App