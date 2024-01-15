
import AddForm from "componets/AddForm";
import Header from "componets/Header";
import LetterList from "componets/LetterList";
import { useState } from "react";
import styled from "styled-components";


export default function Home({letters,setLetters}) {
    const [activeMember , setActiveMember] = useState("카리나");

  return (
    <Container>
      <Header activeMember={activeMember} setActiveMember={setActiveMember}/>
      <AddForm setLetters={setLetters}/>
      <LetterList letters={letters} activeMember={activeMember}/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;