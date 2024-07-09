import React, {ReactNode} from 'react'
import styled from 'styled-components'

interface ModalLayoutProps {
    children: ReactNode
}

const ModalLayout = ({ children }:ModalLayoutProps) => {
  return (
    <BackGround>
      <ModalWrapper>{children}</ModalWrapper>
    </BackGround>
  )
}

export default ModalLayout

const BackGround = styled.div`
  z-index: 1000;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`

const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
