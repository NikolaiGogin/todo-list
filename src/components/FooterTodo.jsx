import { React } from 'react';

const FooterTodo = (props) => {
  return (
    <footer className='todo-list_footer' style={{display: `${props.flex}`}}>
      <div>
        {props.counter} items left
      </div>
      <div className='toto-list_footer-buttons'>
        <button 
          className='todo-button'
          onClick={() => props.filterTodo('all')}
        >
          All
        </button>
        <button 
          className='todo-button'
          onClick={() => props.filterTodo('active')}
        >
          Active
        </button>
        <button 
          className='todo-button'
          onClick={() => props.filterTodo('complited')}
        >
          Complited
        </button>
      </div>
      <div 
        className='todo-list_footer-clear'
        onClick={() => props.deleteDoneTodo()}
      >
        Clear complited
      </div>
    </footer>
  )
}

export default FooterTodo;