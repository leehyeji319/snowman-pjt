import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';
import { register } from '../../store/action/auth';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [allCheck, setAllCheck] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [nickNameError, setNickNameError] = useState(true);

  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [nickNameErrorMessage, setNickNameErrorMessage] = useState('');

  const linkSnowmanGarden = () => {
    if (email) {
      navigate(`/snowmanGarden/${email}`, { state: email });
    } else {
      navigate(-1);
    }
  };

  const linkLogin = () => {
    if (email) {
      navigate('/login');
    } else {
      navigate('/');
    }
  };

  const emailChange = (e) => {
    let value = e.target.value;
    const emailRegex = /^[A-Za-z0-9+]{5,}$/;

    if (value === '') {
      setEmailErrorMessage('아이디를 입력해주세요');
      setEmailError(true);
    } else if (value.length < 5 || value.length > 21) {
      setEmailErrorMessage('아이디는 5자 이상, 20자 이하로 입력해주세요');
      setEmailError(true);
    } else if (!emailRegex.test(value)) {
      setEmailErrorMessage('아이디는 영어, 숫자만 입력 가능합니다');
      setEmailError(true);
    } else setEmailError(false);
    setEmail(value);
  };

  const passwordChange = (e) => {
    let value = e.target.value;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    if (value === '') {
      setPasswordErrorMessage('비밀번호를 입력해주세요');
      setPasswordError(true);
    } else if (!passwordRegex.test(value)) {
      setPasswordErrorMessage(
        '영문/숫자/특수문자 포함 6자 이상, 20자 이하로 입력해주세요',
      );
      setPasswordError(true);
    } else if (value.length < 6 || value.length > 21) {
      setPasswordErrorMessage(
        '영문/숫자/특수문자 포함 6자 이상, 20자 이하로 입력해주세요',
      );
      setPasswordError(true);
    } else setPasswordError(false);
    setPassword(value);
  };

  const rePasswordChange = (e) => {
    setRePassword(e.target.value);
  };

  const nickNameChange = (e) => {
    let value = e.target.value;
    if (value === '') {
      setNickNameErrorMessage('닉네임을 입력해주세요');
      setNickNameError(true);
    } else if (value.length > 10) {
      setNickNameErrorMessage('닉네임은 10글자 이내로 입력해주세요');
      setNickNameError(true);
    } else setNickNameError(false);
    setNickName(value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setSuccessful(false);

    if (allCheck === true) {
      dispatch(register(email, password, nickName))
        .then(() => {
          setSuccessful(true);
          alert('회원가입을 성공적으로 완료했습니다!');
          linkLogin();
        })
        .catch((err) => {
          if (err.response.data.status == 500) {
            alert(
              err.response.data.message + ' 다른 아이디로 다시 시도해주세요',
            );
            setSuccessful(false);
          } else {
            setSuccessful(false);
            alert('회원가입이 실패했습니다! 다시 시도해주세요.');
          }
        });
    } else alert('누락되거나 잘못된 정보를 확인 후 다시 시도해주세요');
  };

  useEffect(() => {
    if (emailError || passwordError || nickNameError === true) {
      setAllCheck(false);
    } else if (password != rePassword) {
      setAllCheck(false);
    } else setAllCheck(true);
  });

  return (
    <AllContainer>
      <Main>
        <RegisterTitle>회원가입</RegisterTitle>
        <form onSubmit={onSubmitHandler}>
          <RegisterBox>
            <p>아이디</p>
            <NameInput onChange={emailChange} maxlength="20" />
            <ErrorMsg>{emailError ? emailErrorMessage : ''}</ErrorMsg>
            <p>비밀번호</p>
            <NameInput type="password" onChange={passwordChange} />
            <ErrorMsg>{passwordError ? passwordErrorMessage : ''}</ErrorMsg>
            <p>비밀번호확인</p>
            <NameInput type="password" onChange={rePasswordChange} />
            <ErrorMsg>
              {password !== rePassword ? '비밀번호가 일치하지 않습니다' : ''}
            </ErrorMsg>
            <p>닉네임(익명)</p>
            <NameInput onChange={nickNameChange} maxlength="10" />
            <ErrorMsg>{nickNameError ? nickNameErrorMessage : ''}</ErrorMsg>
          </RegisterBox>
          <BtnBox>
            <BackBtn onClick={linkSnowmanGarden}>뒤로가기</BackBtn>
            <RegisterBtn type="submit">회원가입</RegisterBtn>
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

const RegisterTitle = styled.div`
  color: white;
  font-size: 4rem;
  margin: 20% 0 10%;
`;

const RegisterBox = styled.div`
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
    background-color: #646464;
    cursor: pointer;
  }
`;

const RegisterBtn = styled.button`
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
