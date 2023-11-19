import React from 'react'
import ArtistTab from './ArtistTab'
import styled from 'styled-components'
export default function Header({selectMember, setSelectMember}) {
  return (
    <HeaderContainer>
      <ArtistTab selectMember={selectMember} setSelectMember={setSelectMember}></ArtistTab>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background-color: #263238;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
