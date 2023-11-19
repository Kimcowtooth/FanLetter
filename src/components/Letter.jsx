import React from 'react'
import styled from 'styled-components'
import defaultProfile  from "assets/sumanlee.jpg"
import { useNavigate } from 'react-router-dom';

export default function Letter({letter}) {
  const navigate = useNavigate();
  const navigateHandler = () =>{
    navigate(`/detail/${letter.id}`)
  }

  return (
    <LetterContainer  onClick={navigateHandler} letter={letter}>
      <User>
        <ProFile>
          <img src={letter.avatar ?? defaultProfile} alt='프로필사진'></img>
        </ProFile>
        <NickName>
          <p>{letter.nickname}</p>
        </NickName>
        <Date>
        <div>{letter.createdAt}</div>
        </Date>
        <Content>{letter.content}</Content>
      </User>
    </LetterContainer>
  )
}
const LetterContainer = styled.li`
  width: 550px;
  color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap : 15px ; 
  padding: 15px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`
const User = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  float: left;
  
`
const ProFile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`
const NickName = styled.div`
  display: flex;
  flex-direction: column;
  
`
const Date = styled.div`
  display: flex;
  flex-direction: column;

`
const Content = styled.div`
  width: 420px;
  background-color: gray;
  border-radius: 15px;
  padding: 15px;
  margin-top : 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`