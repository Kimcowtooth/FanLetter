import LetterCard from './LetterCard';
import styled from 'styled-components';

export default function LetterList({activeMember,letters}) {
  const filterdLetters = letters.filter(letter => letter.writedTo === activeMember);
  return (
    <ListWrapper>
      {filterdLetters.length ===0? 
      (<p>{activeMember}에게 남겨진 팬레터가 없습니다. 첫번째 레터의 주인공이 되어보세요</p>)
       :  (filterdLetters.map((letter)=>(
        <LetterCard key={letter.id} letter={letter}/>
      ))
    )}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
  color: white;
`;
