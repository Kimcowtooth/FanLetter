import LetterList from 'components/LetterList'
import FormAdd from 'components/FormAdd'
import Header from 'components/Header'
import React, { useState } from 'react'
import styled from 'styled-components'
import fakeDate from 'fakeData.json'

export default function Home() {
  const [selectMember , setSelectMember] = useState("카리나");
  const [letters, setLetters] = useState(fakeDate);
    return (
      <HomeContainer>
        <Header selectMember={selectMember} setSelectMember={setSelectMember}/>
        <FormAdd setLetters={setLetters}/>
        <LetterList letters ={letters} selectMember={selectMember}/>
      </HomeContainer>
    )
  }
 
 const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
