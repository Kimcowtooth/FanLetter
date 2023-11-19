import React, { useState } from 'react'
import styled, { css } from 'styled-components'
export default function ArtistTab({selectMember , setSelectMember}) {
  const clickMember = (event)=>{
    setSelectMember(event.target.textContent);
  }
  return (
    <TapsContainer onClick={clickMember}>
      <Tap $selectMember = {selectMember}>카리나</Tap>
      <Tap $selectMember = {selectMember}>윈터</Tap>
      <Tap $selectMember = {selectMember}>닝닝</Tap>
      <Tap $selectMember = {selectMember}>지젤</Tap>
    </TapsContainer>
  )
}

const TapsContainer = styled.ul`
  background-color: darkgray;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  gap: 15px;
  border-radius: 10px;
  border: 5pt groove white;
`

const Tap = styled.li`
  ${(props)=>{
    if (props.$selectMember === props.children){
      return css`
        background-color: #FFCA28;
        color: white;
        box-shadow: 6px 6px 6px;
      `
    }return css`
      background-color: black;
      color: white;
    `
  }}
  list-style-type: none;
  cursor: pointer;
  width: 100px;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  
`