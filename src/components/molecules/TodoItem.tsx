import React from 'react'
import Button from '../atoms/Button'
import styled from 'styled-components'
import editIcon from '../../assets/svg/edit.svg'
import remove from '../../assets/svg/remove.svg'

interface Todo {
  text: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
  onEdit: () => void
}

const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  return (
    <ItemContainer>
      <span
        title={todo.text}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
        onClick={onToggle}>
        {todo.text}
      </span>
      <Button width={10} onClick={onEdit}>
        <Icon src={editIcon + ''} />
      </Button>
      <Button width={10} onClick={onDelete}>
        <Icon src={remove + ''} />
      </Button>
    </ItemContainer>
  )
}

export default TodoItem

const ItemContainer = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;

  & span {
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
`
