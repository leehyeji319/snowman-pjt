import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';
import { API } from '../../config';

export default function SnowmanDesign() {
  const location = useLocation();
  const [nickName, setNickName] = useState('');
  const [letter, setLetter] = useState('');
  const [nickNameError, setNickNameError] = useState(true);
  const [nickNameErrorMessage, setNickNameErrorMessage] = useState('');
  // 주소 정보
  const emailPath = location.pathname;
  const emailLocation = emailPath.substring(8);
  const Head = location.state.Head;
  const Body = location.state.Body;

  useEffect(() => {});

  const nickNameChange = (e) => {
    let value = e.target.value;
    if (value.length > 10) {
      setNickNameErrorMessage(' 닉네임은 10글자 이내로 입력해주세요!');
      setNickNameError(true);
    } else setNickNameError(false);
    setNickName(value.substring(0, 10));
  };

  const letterChange = (e) => {
    setLetter(e.target.value);
  };

  const navigate = useNavigate();
  const linkSnowmanDesign = () => {
    navigate(`/snowmanDesign/${emailLocation}`, {
      state: {
        Head: Head,
        Body: Body,
      },
    });
  };

  const onSubmitHandler = () => {
    axios
      .post(API.SNOWMANPOST, {
        targetEmail: emailLocation,
        headType: Head,
        bodyType: Body,
        authorNickname: nickName,
        post: letter,
      })
      .then((response) => {
        navigate(`/snowmanGarden/${emailLocation}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <AllContainer>
      <Main>
        <LetterTitle>편지작성</LetterTitle>
        {/* <form onSubmit={onSubmitHandler}> */}
        <NameBox>
          <p>닉네임(익명)</p>
          <NameInput onChange={nickNameChange} maxlength="10" />
          <ErrorMsg>{nickNameError ? nickNameErrorMessage : ''}</ErrorMsg>
        </NameBox>
        <LetterBox>
          <LetterContent
            wrap="hard"
            onChange={letterChange}
            placeholder="이곳에 편지를 써주세요!"
          />
        </LetterBox>
        <BtnBox>
          <BackBtn onClick={linkSnowmanDesign}>뒤로가기</BackBtn>
          <LetterBtn onClick={onSubmitHandler}>작성완료</LetterBtn>
        </BtnBox>
        {/* </form> */}
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
  text-align: center;
  z-index: 4;
`;

const LetterTitle = styled.div`
  color: white;
  font-size: 4rem;
  margin: 20% 0 10%;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 5%;
  & p {
    font-size: 1.8rem;
  }
`;

const NameInput = styled.input`
  height: 50px;
  border-radius: 10px;
  margin-top: 5px;
  padding: 0 4%;
  color: black;
`;

const ErrorMsg = styled.p`
  margin-top: 2%;
  margin-left: 2%;
  color: #ce4545;
  font-size: 1.4rem !important;
`;
const LetterBox = styled.div`
  margin-top: 5%;
  padding: 0 5%;
`;

const LetterContent = styled.textarea`
  width: 100%;
  height: 40vh;
  border-radius: 10px;
  resize: none;
  white-space: pre-wrap;
  padding: 4%;
  box-sizing: border-box;
  color: black;
`;

const BtnBox = styled.div`
  margin: 5% 0;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
`;

const BackBtn = styled.div`
  width: 30%;
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
    background-color: #848484;
    cursor: pointer;
  }
`;

const LetterBtn = styled.button`
  width: 30%;
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
