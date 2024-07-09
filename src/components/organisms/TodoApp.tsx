import React, { useState, KeyboardEvent } from 'react'
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import TodoList from "../molecules/TodoList";
import styled from 'styled-components'
import InputModal from "../molecules/Modal/InputModal";

interface Todo {
  text: string;
  completed: boolean;
}


const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [editInput, setEditInput] = useState<string>('')
  const [currentTodo, setCurrentTodo] = useState<number | null>(null)

  const addTodo = () => {
    if (input.trim() === '') return
    setTodos([...todos, { text: input, completed: false }])
    setInput('')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo()
    }
  }

  const deleteTodo = (index:number) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  const toggleTodo = (index:number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(newTodos)
  }

  const onEdit = (index:number) => {
    setCurrentTodo(index)
    setEditInput(todos[index].text)
    setIsModalOpen(true)
  }

  const handleEditSave = () => {
    if (editInput === '') {
      setIsModalOpen(false)
      return
    }
    const newTodos = todos.map((todo, i) =>
      i === currentTodo ? { ...todo, text: editInput } : todo
    )
    setTodos(newTodos)
    setIsModalOpen(false)
  }

  return (
    <TodoLayout>
      <TodoWrapper>
        <Title>{'TODO List'}</Title>
        <TodoContainer>
          <TodoInputContainer>
            <Input
              width={80}
              isBorder={false}
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="할 일을 입력하세요"
            />
            <Button width={20} onClick={addTodo} isBorderLeft={true}>
              {'+'}
            </Button>
          </TodoInputContainer>
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={onEdit}
          />

          <InputModal
            isOpen={isModalOpen}
            handleEditSave={handleEditSave}
            setEditInput={setEditInput}
            onClose={() => setIsModalOpen(false)}
            editInput={editInput}
          />
        </TodoContainer>
      </TodoWrapper>
    </TodoLayout>
  )
}

export default TodoApp

const TodoLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
  padding-top: 40px;
`

const Title = styled.h1`
  width: 100%;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 70%;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 6px;
  background-color: #ffffff;
`

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const TodoInputContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
`
