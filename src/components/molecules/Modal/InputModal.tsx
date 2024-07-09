import React, { KeyboardEvent } from 'react'
import styled from 'styled-components'
import ModalLayout from "./ModalLayout";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
  setEditInput: (value: string) => void;
  editInput: string;
  handleEditSave: () => void;
}

const InputModal = ({
  isOpen,
  onClose,
  setEditInput,
  editInput,
  handleEditSave
}: InputModalProps) => {
  if (!isOpen) {
    return null
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleEditSave()
    }
  }

  return (
    <ModalLayout>
      <InputModalWrapper>
        <ModalHeader>
          <ModalTitle>{'수정하기'}</ModalTitle>
          <ModalCloseButton onClick={onClose}>{'x'}</ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            placeholder="Edit your TODO"
            onKeyDown={handleKeyDown}
            isBorder={false}
            width={100}
          />
          <Button isBorderTop={true} onClick={handleEditSave} width={100}>
            <ButtonTitle>{'수정'}</ButtonTitle>
          </Button>
        </ModalBody>
      </InputModalWrapper>
    </ModalLayout>
  )
}

export default InputModal

const InputModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 150px;
  background-color: #ffffff;
  border: 1px solid #a5a5a5;
  border-radius: 10px;
`

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`

const ModalTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 40px;
  font-size: 25px;
  font-weight: bold;
`
const ModalCloseButton = styled.button`
  width: 10%;
  height: 40px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ButtonTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`
