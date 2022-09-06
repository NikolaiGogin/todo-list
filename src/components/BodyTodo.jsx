import React from 'react';
import { LiTodo } from './LiTodo';

export const BodyTodo = (props) => {
  
    return (
      <ul className='todo-list_body' style={{display: `${props.breaker}`}}>
         {props.liTodo.map(todo => 
            <LiTodo
              valueLi={todo.value} 
              key={todo.id} 
              id={todo.id} 
              classLabelLi={props.classLabelLi} 
              classTextLi={props.classTextLi} 
              deleteTodo={props.deleteTodo} 
              todo={todo}
              isDoneClickArrow={props.isDoneClickArrow}
              isAllDone={props.isAllDone}
              decrement={props.decrement}  
              increment={props.increment} 
              changeTextTodo={props.changeTextTodo}
              executeAllTodo={props.executeAllTodo}
              changeisDoneClickArrow={props.changeisDoneClickArrow}
              changeToDone={props.changeToDone}
              activeButton={props.activeButton}
            />      
          )}
      </ul>
    )
}
