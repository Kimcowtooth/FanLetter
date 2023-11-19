import React from 'react'
import styled from 'styled-components';
import Letter from './Letter';
import { useNavigate } from 'react-router-dom';

export default function LetterList({selectMember,letters}) {

  const filterLetter = letters.filter(letter => letter.writedTo === selectMember)
  return (
    <ListContainer>
      {filterLetter.map(letter => <Letter letter={letter}/>)}
    </ListContainer>
  )
}

const ListContainer = styled.ul`
  width: 500px;
  background-color: black;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 20px;
  padding: 15px;
`
