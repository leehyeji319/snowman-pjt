import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';
import BugerModal from '../../pages/SnowmanGarden/BugerModal';

export default function MainGarden(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [gardenEmail, setGardenEmail] = useState();

  // 로그인유저정보
  const { user: currentUser } = useSelector((state) => state.auth);
  // 주소 정보
  const emailPath = location.pathname;
  const emailLocation = emailPath.replace('/snowmanGarden/', '');

  const linkLogin = () => {
    navigate('/login');
  };
  const linkRegister = () => {
    navigate('/register');
  };

  useEffect(() => {
    if (currentUser != null) {
      setGardenEmail(location.state);
    } else {
      setGardenEmail(emailLocation);
    }
  }, [gardenEmail]);

  return (
    <AllContainer>
      <Main>
        <BugerModal gardenEmail={gardenEmail} currentUser={currentUser} />
        <MainGardenText>
          <div className="text-with-animation">snowman</div>
          <div className="subtext-with-animation">GARDEN</div>
        </MainGardenText>
        <Garden>
          <Snowman>
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/snowmanList/RudolphRudolph.png'
              }
              alt="snowman1"
              className="snowman1"
            />
            <img

              src={process.env.PUBLIC_URL + '/images/snowmanList/DuckDuck.png'}

              alt="snowman2"
              className="snowman2"
            />
            <img
              src={
                process.env.PUBLIC_URL + '/images/snowmanList/BasicBasic.png'
              }
              alt="snowman3"
              className="snowman3"
            />
            <img
              src={
                process.env.PUBLIC_URL + '/images/snowmanList/SantaSanta.png'
              }
              alt="snowman4"
              className="snowman4"
            />

            <img
              src={
                process.env.PUBLIC_URL + '/images/snowmanList/HealthHealth.png'
              }
              alt="snowman5"
              className="snowman5"
            />
            <img
              src={
                process.env.PUBLIC_URL + '/images/snowmanList/CookieCookie.png'
              }
              alt="snowman6"
              className="snowman6"
            />
          </Snowman>
          <Santa>
            <img
              src={process.env.PUBLIC_URL + '/images/treeHomeSanta.png'}
              alt="treeHomeSanta"
              style={{
                width: '100%',
                objectFit: 'cover',
                display: 'block',
                margin: 'auto',
              }}
            />
          </Santa>
          <Snow></Snow>

          <DesignBtn className="loginBtn" onClick={linkLogin}>
            로그인하러가기
          </DesignBtn>
          <DesignBtn className="registerBtn" onClick={linkRegister}>
            회원가입하기
          </DesignBtn>
        </Garden>
      </Main>
    </AllContainer>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Garden = styled.div``;
const Snowman = styled.div`
  position: absolute;
  bottom: 10vh;
  z-index: 99;
  width: 100vw;

  max-width: 800px;
  max-height: 298px;

  & img {
    -webkit-border-radius: 100px;
  }

  & img:hover {
    transform: scale(1.8);
    cursor: pointer;
    z-index: 108;
  }
  .snowman1 {
    position: absolute;
    bottom: 7vh;
    left: 37%;
    transform: translate(-50%, 0);
    transform: scale(1.4);
    z-index: 106;
  }
  .snowman2 {
    position: absolute;
    bottom: 13vh;

    left: 18%;
    transform: scale(1.4);
    z-index: 105;
  }
  .snowman3 {
    position: absolute;
    bottom: 13vh;
    right: 20%;
    transform: scale(1.4);
    z-index: 105;
  }
  .snowman4 {
    position: absolute;
    bottom: 20vh;
    left: 6%;
    transform: scale(1.4);
    z-index: 104;
  }
  .snowman5 {
    position: absolute;
    bottom: 20vh;
    left: 37%;
    transform: translate(-50%, 0);
    transform: scale(1.4);
    z-index: 104;
  }
  .snowman6 {
    position: absolute;
    bottom: 20vh;
    right: 8%;

    transform: scale(1.4);
    z-index: 104;
  }
`;
const Santa = styled.div`
  position: absolute;
  bottom: 37vh;
  width: 100%;
  z-index: 1;
`;
const Snow = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0vh;
  background-color: white;
  height: 40vh;
`;

const MainGardenText = styled.div`
  margin-top: 4rem;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text-with-animation {
    font-size: 3.5rem;
    text-transform: uppercase;
    text-align: center;
    animation: main-text-animation 0.5s ease-in-out forwards;
    font-weight: 600;
    color: white;
    overflow: hidden;
    display: block;
    width: 100%;
    letter-spacing: 7px;
  }
  .subtext-with-animation {
    font-size: 3rem;
    text-align: center;
    width: 100%;
    color: #fff;
    letter-spacing: 4px;
    user-select: none;
    position: relative;
    opacity: 0;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    animation: word-animation 0.5s ease-out 0.3s forwards;
  }

  @keyframes main-text-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes word-animation {
    0% {
      top: 5vh;
      opacity: 0;
    }
    100% {
      top: 1vh;
      opacity: 1;
    }
  }
`;

const DesignBtn = styled.div`
  position: absolute;
  width: 70%;
  bottom: 3vh;
  font-size: 1.5rem;
  background-color: #ce4545;
  border-radius: 5px;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  left: 15%;

  &.loginBtn {
    bottom: 9vh;
  }
  &.registerBtn {
    background-color: #527c63;
  }
  &:hover {
    color: white;
    background-color: rgba(180, 40, 40, 1);
    cursor: pointer;
  }
  &.registerBtn:hover {
    background-color: #375242;
  }
`;
