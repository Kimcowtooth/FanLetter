
import AddForm from "componets/AddForm";
import Header from "componets/Header";
import LetterList from "componets/LetterList";
import { useState } from "react";
import styled from "styled-components";


export default function Home() {
  return (
    <Container>
      <Header/>
      <AddForm />
      <LetterList/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;