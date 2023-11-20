import LetterList from 'components/LetterList'
import FormAdd from 'components/FormAdd'
import Header from 'components/Header'
import React, { useState } from 'react'
import styled from 'styled-components'


export default function Home({letters}) {
  const [selectMember , setSelectMember] = useState("카리나");
  
    return (
      <HomeContainer>
        <Header selectMember={selectMember} setSelectMember={setSelectMember}/>
        <FormAdd letters ={letters} setLetters={setLetters}/>
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
