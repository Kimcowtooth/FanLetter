import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import defaultProfile  from "assets/sumanlee.jpg"

export default function DetailPage({letters}) {
    const {id} = useParams();
    console.log(letters)
  return (
    
    <DetailContainer>
        <HomeBtn>
        <button>홈으로</button> 
        </HomeBtn>
        <DetailArea>
            <User>
                
            <Profile>
             <img src={letters.avatar ?? defaultProfile} alt='프로필사진'></img>
             </Profile>
            <Nickname>
             <p>{letters.nickname}</p>
            </Nickname>
            </User>
            <ToArtist>아티스트</ToArtist>
            <ToContent>{letters.content}</ToContent>

                <Btns>
                    <button>수정</button>
                    <button>삭제</button>
                </Btns>
        </DetailArea>
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

`
const HomeBtn = styled.div`
    position: absolute;
`
const DetailArea = styled.div`
    width: 700px;
    height: 400px;
    background-color: gray;
    color : white;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
`
const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Nickname = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ToArtist = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ToContent = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`
const Btns = styled.div`
    display: flex;
    justify-content: flex-end;
`