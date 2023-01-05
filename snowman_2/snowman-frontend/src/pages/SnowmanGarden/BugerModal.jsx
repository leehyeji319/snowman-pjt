import { useState, useRef } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/action/auth';

export default function BugerModal({ gardenEmail, currentUser }) {
  const navigate = useNavigate();
  const modalRef = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  // Link
  const linkSignUp = () => {
    navigate('/register');
  };
  const linkLogin = () => {
    navigate('/login');
  };
  const linkSnowmanGarden = () => {
    window.location.replace(`/snowmanGarden/${currentUser.email}`);
  };
  const linkIntroduce = () => {
    navigate(`/introduce`);
  };
  // Modal
  const showModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout()).then(() => {
      if (gardenEmail) {
        window.location.replace(`/snowmanGarden/${gardenEmail}`);
      } else {
        window.location.replace('/');
      }
      alert('로그아웃 성공!');
    });
  };

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler); // 모바일 대응
    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    <>
      {modalOpen ? (
        <ModalBackground>
          <ModalBox ref={modalRef}>
            <IoClose
              onClick={closeModal}
              size="30"
              style={{
                position: 'absolute',
                top: '2.5%',
                right: '3%',
                cursor: 'pointer',
                zIndex: '99',
              }}
            />
            <ModalContent>
              {currentUser != null ? (
                <>
                  <p className="user" onClick={onLogout}>
                    로그아웃
                  </p>
                  <hr
                    style={{
                      height: '0.1rem',
                      backgroundColor: '#c8c8c8',
                      border: '0',
                    }}
                  ></hr>

                  <p onClick={linkSnowmanGarden}>내 정원가기</p>
                </>
              ) : (
                <>
                  <p className="user" onClick={linkLogin}>
                    로그인
                  </p>
                  <p className="user" onClick={linkSignUp}>
                    회원가입
                  </p>
                </>
              )}

              <p onClick={linkIntroduce}>
                <br></br>
                <img
                  src={process.env.PUBLIC_URL + '/images/gameDuck.png'}
                  alt="game-duck"
                  style={{
                    width: '1.4rem',
                    verticalAlign: 'bottom',
                  }}
                />{' '}
                겜덕 개발스토리<br></br>(Game-Duck)
              </p>
            </ModalContent>
          </ModalBox>
        </ModalBackground>
      ) : (
        <div
          onClick={showModal}
          style={{
            position: 'absolute',
            top: '2.5%',
            right: '3%',
            zIndex: '99',
            cursor: 'pointer',
          }}
        >
          <GiHamburgerMenu size="30" />
        </div>
      )}
    </>
  );
}

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(102, 100, 100, 0.3);
  display: flex;
  justify-content: end;
  z-index: 999;
`;
const ModalBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  z-index: 99;

  background-color: #0f1322de;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  padding: 1.3rem;
  font-size: 1.4rem; 
  
  .user {
    font-size: 1.6em; !important
  }
  p {
    cursor: pointer;

    &:hover {
      color: #c8c8c8;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
