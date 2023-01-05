import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';
import { SnowmanHead, SnowmanBody } from './SnowmanPieceData';

export default function SnowmanDesign() {
  const location = useLocation();
  const [headList, setHeadList] = useState(true);
  const [bodyList, setBodyList] = useState(false);
  const [selectHead, setSelectHead] = useState('HeadBase');
  const [selectBody, setSelectBody] = useState('BodyBase');

  // 주소 정보
  const emailPath = location.pathname;
  const emailLocation = emailPath.substring(15);

  useEffect(() => {});

  const onChangeHead = (value) => {
    setSelectHead(value);
  };

  const onChangeBody = (value) => {
    setSelectBody(value);
  };

  const navigate = useNavigate();

  const linkSnowmanGarden = () => {
    navigate(`/snowmanGarden/${emailLocation}`);
  };

  const postHead = selectHead.replace('Head', '');
  const postBody = selectBody.replace('Body', '');

  const linkLetter = () => {
    if (selectHead == 'HeadBase' || selectBody == 'BodyBase') {
      alert('눈사람을 꾸며야 편지를 쓸 수 있어요!');
    } else {
      navigate(`/letter/${emailLocation}`, {
        state: {
          Head: postHead,
          Body: postBody,
        },
      });
    }
  };

  return (
    <AllContainer>
      <Main>
        <MainText>
          1. 눈사람을 꾸밀 <span style={{ color: '#f5c51f' }}>재료</span>를
          선택해주세요
          <br></br>
          2. 눈사람을 완성했다면{' '}
          <span style={{ color: '#f5c51f' }}>편지쓰러가기</span> 버튼을 눌러
          친구에게 편지를 써주세요
        </MainText>

        <SnowmanBox>
          <SelectSnowmanHeadBox>
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/snowmanPiece/' +
                selectHead +
                '.png'
              }
              alt="snowmanHead"
              style={{
                width: '100%',
                objectFit: 'cover',
                transform: 'scale(1.8)',
              }}
            />
          </SelectSnowmanHeadBox>
          <SelectSnowmanBodyBox>
            <img
              src={
                process.env.PUBLIC_URL +
                '/images/snowmanPiece/' +
                selectBody +
                '.png'
              }
              alt="snowmanBody"
              style={{
                width: '100%',
                objectFit: 'cover',
                transform: 'scale(1.8)',
              }}
            />
          </SelectSnowmanBodyBox>
          <Snowman>
            <img
              src={process.env.PUBLIC_URL + '/images/snowmanList/Base.png'}
              alt="snowman"
              style={{
                width: '100%',
                objectFit: 'cover',
                transform: 'scale(1.8)',
              }}
            />
          </Snowman>
        </SnowmanBox>

        <DesignBox>
          <DesignBtnBox>
            <DesignBtn
              onClick={() => {
                setHeadList(true);
                setBodyList(false);
              }}
              className={headList ? 'headtrue' : 'headfalse'}
            >
              눈사람 머리
            </DesignBtn>
            <DesignBtn
              onClick={() => {
                setHeadList(false);
                setBodyList(true);
              }}
              className={bodyList ? 'bodytrue' : 'bodyfalse'}
            >
              눈사람 몸
            </DesignBtn>
          </DesignBtnBox>
          {headList === true ? (
            <SnowmanHead onChangeHead={onChangeHead} />
          ) : (
            <SnowmanBody onChangeBody={onChangeBody} />
          )}
        </DesignBox>
        <BackBtn onClick={linkSnowmanGarden}>뒤로가기</BackBtn>
        <LetterBtn onClick={linkLetter}>편지쓰러가기</LetterBtn>

        <Tree>
          <img
            src={process.env.PUBLIC_URL + '/images/tree.png'}
            alt="tree"
            style={{
              width: '100%',
              objectFit: 'cover',
              display: 'block',
              margin: 'auto',
            }}
          />
        </Tree>
        <Snow></Snow>
      </Main>
    </AllContainer>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainText = styled.div`
  font-size: 1.5rem;
  margin: 2rem;
  z-index: 99;
  line-height: 2rem;
`;

const SnowmanBox = styled.div`
  width: 100%;
  height: 100%;
`;

const SelectSnowmanHeadBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 38vh;
  transform: translate(-50%, 0);
  width: 30vw;
  max-width: 200px;
  max-height: 298px;
  z-index: 4;
`;

const SelectSnowmanBodyBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 38vh;
  transform: translate(-50%, 0);
  width: 30vw;
  max-width: 200px;
  max-height: 298px;
  z-index: 4;
`;

const Snowman = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 38vh;
  width: 30vw;
  max-width: 200px;
  max-height: 298px;
  z-index: 3;

  & img {
    max-width: 100%;
    height: auto;
  }
`;

const DesignBox = styled.div`
  width: 85%;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 9%;
  border-radius: 5px;
  background-color: #d3dff3;
  padding: 2.5% 2%;
  z-index: 99;
`;

const DesignBtnBox = styled.div`
  width: 100%;
  height: 120%;
  margin: 0 auto 10px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const DesignBtn = styled.div`
  width: 49%;
  font-size: 1.5em;
  line-height: 1.5em;
  border-radius: 5px;

  &.headtrue {
    background-color: #33374a;
  }
  &.headfalse {
    background-color: #a2afc7;
  }
  &.bodytrue {
    background-color: #33374a;
  }
  &.bodyfalse {
    background-color: #a2afc7;
  }
  &:hover {
    color: white;
    background-color: #33374a;
    cursor: pointer;
  }
`;

const BackBtn = styled.div`
  position: absolute;
  width: 20%;
  bottom: 3%;
  font-size: 1rem;
  background-color: #999;
  line-height: 20px;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  left: 8%;
  z-index: 99;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: #646464;
    cursor: pointer;
  }
`;

const LetterBtn = styled.div`
  position: absolute;
  width: 30%;
  bottom: 3%;
  font-size: 1rem;
  background-color: #ce4545;
  line-height: 20px;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  right: 8%;
  z-index: 99;
  border-radius: 5px;

  &:hover {
    color: white;
    background-color: rgba(180, 40, 40, 1);
    cursor: pointer;
  }
`;

const Tree = styled.div`
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
