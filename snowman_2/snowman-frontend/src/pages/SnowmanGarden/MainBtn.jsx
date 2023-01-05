import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function MainBtn({ gardenEmail, currentUser }) {
  const navigate = useNavigate();

  const linkSnowmanDesign = () => {
    navigate(`/snowmanDesign/${gardenEmail}`);
  };
  const linkReadingLetter = () => {
    navigate(`/readingLetter/${gardenEmail}`);
  };
  const linkRegister = () => {
    navigate(`/register`);
  }

  return (
    <>
      {currentUser == null ? (
        <BtnWrap>
          <DesignBtn className="madeBtn"onClick={linkSnowmanDesign}>눈사람 만들어주기</DesignBtn>
          <DesignBtn className="registerBtn"onClick={linkRegister}>내 정원만들기</DesignBtn>
        </BtnWrap>
      ) : currentUser.email == gardenEmail ? (
        <DesignBtn className="designBtn"onClick={linkReadingLetter}>편지 읽으러가기</DesignBtn>
      ) : (
        <DesignBtn className="designBtn"onClick={linkSnowmanDesign}>눈사람 만들어주기</DesignBtn>
      )}

    </>
  );
}
const DesignBtn = styled.div`
  border-radius: 5px;
  position: absolute;
  width: 70%;
  bottom: 3vh;
  font-size: 1.5rem;
  background-color: #ce4545;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  left: 15%;

  &:hover {
    color: white;
    background-color: rgba(180, 40, 40, 1);
    cursor: pointer;
  }
  &.registerBtn:hover {
    background-color: #375242;
  }
`;

const BtnWrap = styled.div`
  border-radius: 5px;
  position: absolute;
  display:flex;
  width: 90%;
  bottom: 3vh;
  left: 50%;
  transform: translate(-50%,0);

  & .madeBtn {
    position: static;
    margin: 0 5px;
  }

  & .registerBtn {
    background-color: #527c63;
    position: static;
    margin: 0 5px;
  }
`;