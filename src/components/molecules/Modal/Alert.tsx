import ModalLayout from './ModalLayout'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import React from 'react'

interface AlertProps {
  isOpen: boolean
  onClose: () => void
  text: string
}

const Alert = (props: AlertProps) => {
  const { isOpen, onClose, text } = props
  if (!isOpen) {
    return null
  }

  return (
    <ModalLayout>
      <ModalWrapper>
        <ModalBody id={'alert'}>
          <Text>{text}</Text>
          <Button isBorderTop={false} onClick={onClose} width={100}>
            <ButtonTitle>{'확인'}</ButtonTitle>
          </Button>
        </ModalBody>
      </ModalWrapper>
    </ModalLayout>
  )
}

export default Alert

const ModalWrapper = styled.div`
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

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ButtonTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
