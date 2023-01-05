import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';
import { login } from '../../store/action/auth';

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [allCheck, setAllCheck] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const linkSnowmanGarden = () => {
    if (email) {
      navigate(`/snowmanGarden/${email}`, { state: email });
    } else {
      navigate(-1);
    }
  };

  const emailChange = (e) => {
    if (e.target.value === '') {
      setEmailErrorMessage('아이디를 입력해주세요');
      setEmailError(true);
    } else setEmailError(false);
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    if (e.target.value === '') {
      setPasswordErrorMessage('비밀번호를 입력해주세요');
      setPasswordError(true);
    } else setPasswordError(false);
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setLoading(false);

    if (allCheck === true) {
      dispatch(login(email, password))
        .then(() => {
          setLoading(true);
          linkSnowmanGarden();
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          alert('등록된 아이디, 비밀번호가 없습니다');
        });
    } else alert('누락된 정보를 확인 후 다시 시도해주세요');
  };

  useEffect(() => {
    if (emailError || passwordError === true) {
      setAllCheck(false);
    } else setAllCheck(true);
  });

  return (
    <AllContainer>
      <Main>
        <LoginTitle>로그인</LoginTitle>
        <form onSubmit={onSubmitHandler}>
          <LoginBox>
            <p>아이디</p>
            <NameInput onChange={emailChange} />
            <ErrorMsg>{emailError ? emailErrorMessage : ''}</ErrorMsg>
            <p>비밀번호</p>
            <NameInput type="password" onChange={passwordChange} />
            <ErrorMsg>{passwordError ? passwordErrorMessage : ''}</ErrorMsg>
          </LoginBox>
          <BtnBox>
            <BackBtn onClick={linkSnowmanGarden}>뒤로가기</BackBtn>
            <LoginBtn type="submit">로그인</LoginBtn>
          </BtnBox>
        </form>
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
`;

const LoginTitle = styled.div`
  color: white;
  font-size: 4rem;
  margin: 20% 0 10%;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 5%;
  & p {
    margin-top: 10px;
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
  color: #ce4545;
  font-size: 1.4rem !important;
`;

const BtnBox = styled.div`
  margin: 5% 0;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
`;

const BackBtn = styled.button`
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
    background-color: #646464;
    cursor: pointer;
  }
`;

const LoginBtn = styled.button`
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
  z-index: -1;
`;

const TreeHome = styled.div`
  position: absolute;
  bottom: 40vh;
  width: 100%;
  z-index: -2;
`;

const Snow = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0vh;
  background-color: white;
  height: 42vh;
  z-index: -3;
`;
