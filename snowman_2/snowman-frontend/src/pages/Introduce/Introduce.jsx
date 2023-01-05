import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';
import { useNavigate } from 'react-router-dom';
import BugerModal from '../SnowmanGarden/BugerModal';

export default function Introduce(props) {
  const navigate = useNavigate();
  // 로그인유저정보
  const { user: currentUser } = useSelector((state) => state.auth);

  return (
    <AllContainer>
      <Main>
        <BugerModal currentUser={currentUser} />
        <IntroduceTitle>
          <img
            src={process.env.PUBLIC_URL + '/images/gameDuck.png'}
            alt="snowman"
            style={{ width: '4vh', verticalAlign: 'bottom' }}
          />
          &nbsp;겜덕 개발스토리 <br></br>(Game-Duck)
        </IntroduceTitle>
        <IntroduceContent>
          <span>
            친구를 위해 <br></br>⛄ 눈사람을 만들어주세요! ⛄
          </span>
          <br></br>
          <img
            src={process.env.PUBLIC_URL + '/images/introduceImage.png'}
            alt="snowman"
            className="snowmanLetter"
            style={{ display: 'block', margin: '3% auto', width: '70%' }}
          />
          정원을 만들어 친구들에게 링크를 공유하면,
          <br></br>
          친구들이 개성있는 눈사람을 만들어줄거예요!
          <br></br>
          <br></br>
          <span>🐥 개발팀 겜덕(Game-Duck) </span>
          <SortContent>
            스노우맨가든은 짱친 3명 (하찌노예, 술지, 쨈바른빵)이 만든 롤링페이퍼
            서비스입니다!
            <br></br>
            프론트엔드 2명, 백엔드 1명이 모여 포트폴리오용으로 제작하였습니다 😊
            <br></br>
            <br></br>- 배경이미지: Designed by Freepik
            <br></br>- 스노우맨이미지 : 하찌노예, 술지
            <br></br>
            <br></br>
            <p className="service"> 스노우맨가든은 비영리 서비스입니다. 🐣</p>
          </SortContent>
        </IntroduceContent>
        <BtnBox>
          <BackBtn onClick={() => navigate(-1)}>뒤로가기</BackBtn>
        </BtnBox>
      </Main>
      <Background>
        <DarkBg></DarkBg>
        <TreeHome>
          <img
            src={process.env.PUBLIC_URL + '/images/treeHome.png'}
            alt="tree"
            style={{
              width: '100%',
              objectFit: 'cover',
              display: 'block',
              margin: 'auto',
            }}
          />
        </TreeHome>
        <Snow></Snow>
      </Background>
    </AllContainer>
  );
}

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  z-index: 4;
`;

const IntroduceTitle = styled.div`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin: 15% 0 0;
`;

const IntroduceContent = styled.div`
  padding: 8%;
  font-size: 1.1rem;
  letter-spacing: 1px;
  word-spacing: 2px;
  line-height: 2rem;
  text-align: center;
  & span {
    font-size: 1.5rem;
  }
`;

const SortContent = styled.div`
  text-align: left;
  margin-bottom: 5%;
  & p {
    text-align: center;
  }
`;
const BtnBox = styled.div`
  margin: 5% 0;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
`;

const BackBtn = styled.div`
  border-radius: 5px;
  position: absolute;
  width: 70%;
  bottom: 3vh;
  left: 15%;
  font-size: 1.5rem;
  padding: 0.6rem 0 0.6rem 0;
  text-align: center;

  background-color: #999;
  z-index: 99;

  &:hover {
    color: white;
    background-color: #848484;
    cursor: pointer;
  }
`;

const Background = styled.div``;

const DarkBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
`;

const TreeHome = styled.div`
  position: absolute;
  bottom: 40vh;
  width: 100%;
  z-index: 2;
`;

const Snow = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0vh;
  background-color: white;
  height: 42vh;
  z-index: 1;
`;
