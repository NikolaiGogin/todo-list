import React, { useState } from 'react';
import '../styles/App.css';
import InputTodo from './InputTodo';
import { BodyTodo } from './BodyTodo';
import FooterTodo from './FooterTodo';

export const TodoList = () => {
  const [todo, setTodo] = useState([])

  const [todoList, setTodoList] = useState({
    classTextLi: '',
    classLabelLi: '',
    include: 'none',
    flex: 'none',
    input: '',
    counter: 0,
    isDoneClickArrow: false,
    isAllDone: true,
    activeButton: 'all',
  });

  const handleChange = (event) => {
    setTodoList({ ...todoList, input: event.target.value })
  }

  const showBlock = (event) => {
    if (event.charCode === 13 && todoList.input) {
      setTodo([...todo, { id: Date.now(), value: todoList.input, isDone: false }])
      setTodoList(Object.assign(todoList, { flex: 'flex', include: 'block', input: '' }))

      increment()
    }
  }

  const decrement = () => {
    setTodoList({ ...todoList, counter: todoList.counter - 1 })
  }

  const increment = () => {
    setTodoList({ ...todoList, counter: todoList.counter + 1 })
  }

  const deleteTodo = (toDo, stateLabel) => {
    setTodo([...todo.filter(elem => elem.id !== toDo.id)])

    if (stateLabel === 'label-li-not-done') {
      decrement()
    }

    removeBlock()
  }


  const removeBlock = () => {
    if (todo.length === 0) {
      setTodoList({ include: 'none', flex: 'none' })
    }
  }

  const changeTextTodo = (toDo, val) => {
    setTodo([...todo.map(elem => {
      if (elem.id === toDo.id) {
        return { id: toDo.id, value: val, isDone: elem.isDone }
      }
      return elem
    })]);
  }

  const executeAllTodo = () => {
    const length = todo.length
    const counter = todoList.counter

    if (counter <= length && counter) {
      setTodoList({
        ...todoList,
        classLabelLi: 'label-li-done',
        classTextLi: 'text-li-done',
        isDoneClickArrow: true,
        isAllDone: true,
        counter: 0
      });

      setTodo([...todo.map(elem => {
        return { id: elem.id, value: elem.value, isDone: true }
      })]);
    }

    if (counter === 0) {
      setTodoList({
        ...todoList,
        classLabelLi: 'label-li-not-done',
        classTextLi: 'text-li-not-done',
        isDoneClickArrow: true,
        isAllDone: false,
        counter: todo.length
      });

      setTodo([...todo.map(elem => {
        return { id: elem.id, value: elem.value, isDone: false }
      })]);
    }
  }

  const changeisDoneClickArrow = () => {
    setTodoList({ ...todoList, isDoneClickArrow: false })
  }

  const changeToDone = (id) => {
    let isDone = todo.filter(elem => elem.id === id)[0].isDone;

    setTodo([...todo.map(elem => {
      if (elem.id === id) {
        return { id: elem.id, value: elem.value, isDone: !isDone }
      }
      return elem
    })]);
  }

  const filterTodo = (button) => {
    if (button === 'all') {
      setTodoList({ ...todoList, activeButton: 'all' })
    }

    if (button === 'active') {
      setTodoList({ ...todoList, activeButton: 'active' })
    }
    if (button === 'complited') {
      setTodoList({ ...todoList, activeButton: 'complited' })
    }
  }

  const deleteDoneTodo = () => {
    setTodo([...todo.filter(elem => elem.isDone === false)]);
  }

  return (
    <div className='todo-list'>
      <InputTodo
        onChange={handleChange}
        onKeyPress={showBlock}
        value={todoList.input}
        executeAllTodo={executeAllTodo}
      />
      <BodyTodo
        isDoneClickArrow={todoList.isDoneClickArrow}
        isAllDone={todoList.isAllDone}
        breaker={todoList.include}
        liTodo={todo}
        classLabelLi={todoList.classLabelLi}
        classTextLi={todoList.classTextLi}
        deleteTodo={deleteTodo}
        decrement={decrement}
        increment={increment}
        changeTextTodo={changeTextTodo}
        executeAllTodo={executeAllTodo}
        changeisDoneClickArrow={changeisDoneClickArrow}
        changeToDone={changeToDone}
        activeButton={todoList.activeButton}
      />
      <FooterTodo
        breaker={todoList.include}
        flex={todoList.flex}
        counter={todoList.counter}
        filterTodo={filterTodo}
        deleteDoneTodo={deleteDoneTodo}
      />
    </div>
  )
}
