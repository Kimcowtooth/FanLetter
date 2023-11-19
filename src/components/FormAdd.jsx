import React, { useState } from 'react'
import styled from 'styled-components'
import uuid from 'react-uuid';
export default function FormAdd({setLetters}) {
  const [nickName , setNickname] = useState("");
  const [content , setContent]= useState("");
  const [artist, setArtist] = useState("카리나");

  const nickNameHandler = (event) => {
    setNickname(event.target.value)
  }
  const contentHandler = (event) => {
    setContent (event.target.value)
  }

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    if(nickName.length===0 || content.length===0 )
      return alert("닉네임과 내용을 적어주세요");

    const newLetter = {
      createdAt : null,
      nickname : nickName,
      avatar : null,
      content : content,
      writedTo : artist,
      id : uuid(),
    }

    setLetters(prev => [newLetter,...prev ])
  }
  return (
    <FormContainer onSubmit={FormSubmitHandler}>
      <Input>
        <label>닉네임</label>
        <input
        onChange={nickNameHandler}
        value={nickName}
        placeholder='최대 20글자까지 작성할 수 있습니다.'
        maxLength={20}>
        </input>
      </Input>
      <Input>
        <label>내용</label>
        <textarea
        onChange={contentHandler}
        value={content}
        placeholder='최대 100글자까지 작성할 수 있습니다.' 
        maxLength={100}>
        </textarea>
      </Input>
      <Input>
      <label>　To . </label>
      <select onChange={(event) => setArtist(event.target.value)}>
        <option>카리나</option>
        <option>윈터</option>
        <option>닝닝</option>
        <option>지젤</option>
      </select>
      </Input>
      <Button>
        <button>팬레터보내기</button>
      </Button>
    </FormContainer>
  )
}
const FormContainer = styled.form`
  width: 500px;
  background-color: gray;
  padding: 12px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  
`
const Input = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  & label {
    width: 100px;
  }
  & input {
    width: 90%;
    height: 30px;
  }
  & textarea{
    width: 90%;
    height: 100px;
  }
`
const Button = styled.div`
  display: flex;
  justify-content: flex-end;
`