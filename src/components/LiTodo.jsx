import React, { useState, useEffect } from 'react';

export const LiTodo = (props) => {
  const [liTodo, setLiTodo] = useState({
      classLabelLi: 'label-li-not-done',
      classTextLi: 'text-li-not-done',
      breakerTodo: 'block',
      breakerInput: 'none',
      breakerDeleteLabel: 'none',
      inputValue: props.valueLi,
  });

  useEffect(() => {
    if (props.isDoneClickArrow) {
      if (props.isAllDone) {
        setLiTodo({
          ...liTodo,
          classTextLi: props.classTextLi, 
          classLabelLi: props.classLabelLi
        })
        props.changeisDoneClickArrow()
        return
      }
  
      setLiTodo({
        ...liTodo,
        classTextLi: props.classTextLi, 
        classLabelLi: props.classLabelLi
      })
      props.changeisDoneClickArrow()
    }
  }, [])
  
  const handleClick = () => {
    setLiTodo({
        ...liTodo, 
        classLabelLi: liTodo.classLabelLi === 'label-li-not-done' ? 'label-li-done' : 'label-li-not-done',
        classTextLi:  liTodo.classTextLi === 'text-li-not-done' ? 'text-li-done' : 'text-li-not-done',
      }
    )
    
    liTodo.classLabelLi === 'label-li-done' ? props.increment() : props.decrement()
    props.changeToDone(props.id)
  }

  const showDeleteLabel = () => {
    if (liTodo.breakerInput === 'none') {
      setLiTodo({
        ...liTodo, 
        breakerDeleteLabel:  liTodo.breakerDeleteLabel === 'none' ? 'block' : 'none', 
      })
    }
  }

  const handleDoubleClick = () => {
    setLiTodo({
      ...liTodo,
      breakerTodo: 'none',
      breakerInput: 'block',
      breakerDeleteLabel: 'none',
    })
  }

  const changeTodo = event => {
    if (event.charCode === 13 && liTodo.inputValue) {
      setLiTodo({
        ...liTodo,
        breakerTodo: 'block',
        breakerInput: 'none',
        breakerDeleteLabel: liTodo.breakerDeleteLabel === 'none' ? 'block' : 'none', 
      })
      props.changeTextTodo(props.todo, liTodo.inputValue)
    }
  }

  const changeInputValue = event => {
    setLiTodo({
      ...liTodo,
      inputValue: event.target.value
    })
  }

  const filterLi = () => {
    const activeButton = props.activeButton
    if (activeButton === 'active') {
      return liTodo.classLabelLi === 'label-li-not-done' ? {display: 'flex'} : {display: 'none'}
    }

    if (activeButton === 'complited') {
      return liTodo.classLabelLi === 'label-li-done' ? {display: 'flex'} : {display: 'none'}
    }
  }

    return (
      <li
        id={props.id} 
        style={filterLi()}
        className='todo-list_body-li' 
        onMouseEnter={showDeleteLabel}
        onMouseLeave={showDeleteLabel}
      >
        <div 
          className='todo-list_body-todo'
          >
          <div 
            onClick={handleClick} 
            className={liTodo.classLabelLi}
            style={{display: `${liTodo.breakerTodo}`}}
          />
          <p 
            onDoubleClick={handleDoubleClick} 
            className={liTodo.classTextLi} 
            style={{display: `${liTodo.breakerTodo}`}}
          >
            {props.valueLi}
          </p>
          <input 
            className='todo-list_body-input'
            style={{display: `${liTodo.breakerInput}`}}
            onKeyPress={changeTodo}
            onChange={changeInputValue}
            value={liTodo.inputValue}
          />
        </div>
        <div 
          className='todo-list_body-delete' 
          style={{display: `${liTodo.breakerDeleteLabel}`}}
          onClick={() => props.deleteTodo(props.todo, liTodo.classLabelLi)}
        />
      </li> 
    )
}
