import React from 'react'
import styled from 'styled-components'

export default function Button({text,onClick = () =>{}}) {
  return (
    <BtnWrapper>
        <button onClick={onClick}>{text}</button>
      </BtnWrapper>
  )
}
const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`