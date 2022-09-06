import { React } from 'react';

const InputTodo = (props) => {
  return (
    <div>
      <div
        className='todo-list_input-arrow'
        onClick={props.executeAllTodo}
      />
      <input 
        type="text"
        className='todo-list_input' 
        placeholder='What needs to be done?'
        onKeyPress={props.onKeyPress} 
        value={props.value}
        onChange={props.onChange}
        autoFocus
      />
    </div>
  )
}

export default InputTodo;