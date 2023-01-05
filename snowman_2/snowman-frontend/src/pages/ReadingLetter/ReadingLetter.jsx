import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import AllContainer from '../../components/AllContainer';
import BugerModal from '../SnowmanGarden/BugerModal';
import '../../styles/Paging.css';
import { API } from '../../config';

export default function ReadingLetter() {
  const navigate = useNavigate();
  const location = useLocation();

  const [gardenEmail, setGardenEmail] = useState();
  const [letterFront, setLetterFront] = useState(false);
  const [letterBack, setLetterBack] = useState(false);
  const [data, setData] = useState([]);
  const [nickname, setNickname] = useState('');
  const [connect, setConnect] = useState(false);
  const [clickLetter, setClickLetter] = useState(false);

  // 로그인유저정보
  const { user: currentUser } = useSelector((state) => state.auth);

  // 주소 정보
  const emailPath = location.pathname;
  const emailLocation = emailPath.substring(15);

  // 편지 회전효과(클래스 네임 추가)
  var letterFrontClass = letterFront ? 'active' : 'notActive';
  var letterBackClass = letterBack ? 'active' : 'notActive';

  if (!clickLetter) {
    letterFrontClass = '';
    letterBackClass = 'first';
  }

  const showLetter = () => {
    setLetterFront(!letterFront);
    setLetterBack(!letterBack);
    setClickLetter(true);
  };

  /* pagingnation */
  // 첫 번째 페이지
  const [page, setPage] = useState(1);
  // 한 페이지에 보여줄 총 갯수
  const [pagePost] = useState(1);
  // 페이지 이동 이벤트함수
  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setGardenEmail(emailLocation);

    if (currentUser == null) {
      if (gardenEmail !== undefined) {
        alert('접근권한이 없습니다.');
        navigate(`/snowmangarden/${gardenEmail}`);
      }
    } else if (currentUser.email != gardenEmail) {
      if (gardenEmail !== undefined) {
        alert('접근권한이 없습니다.');
        navigate(`/snowmangarden/${gardenEmail}`);
      }
    } else {
      setGardenEmail(currentUser.email);
      async function fetchData() {
        if (currentUser != null) {
          axios
            .get(API.SNOWMANPOST+`/${gardenEmail}`)
            .then((response) => {
              setData(response.data.snowmans);
              setNickname(response.data.nickname);
            });
        }
      }
      if (gardenEmail !== undefined) {
        fetchData();
        setConnect(true);
      }
    }
  }, [gardenEmail, currentUser]);

  const linkSnowmanGarden = () => {
    navigate(`/snowmangarden/${gardenEmail}`);
  };
  if (connect) {
    return (
      <AllContainer>
        <GiAnticlockwiseRotation
          size={30}
          style={{
            position: 'absolute',
            left: '50%',
            transform: ' translate(-50%, 0)',
            top: '18%',
          }}
        />

        <Main>
          <BugerModal gardenEmail={gardenEmail} currentUser={currentUser} />
          <MainText>
            <span style={{ color: '#f5c51f' }}>{nickname}</span> 님의 편지함 ({' '}
            <span style={{ color: '#ce4545' }}>{data.length}</span> 건)<br></br>
            <br></br>
            눈사람을 클릭하면 <span style={{ color: '#f5c51f' }}>편지</span>가
            보여요!
          </MainText>
          {data.length > 0 ? (
            data
              .slice(pagePost * (page - 1), pagePost * (page - 1) + pagePost)
              .map((a, i) => {
                return (
                  <Wrap key={Date.now()}>
                    <Snowman onClick={showLetter}>
                      <div className={'item front ' + letterFrontClass}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            '/images/snowmanList/' +
                            a.snowmanType +
                            '.png'
                          }
                          alt="snowman"
                          className="snowmanLetter"
                        />
                      </div>
                      <LetterContent className={'item back ' + letterBackClass}>
                        {a.post}
                      </LetterContent>
                    </Snowman>
                    <Name>{a.authorNickname}</Name>
                  </Wrap>
                );
              })
          ) : (
            <NullBox></NullBox>
          )}

          {data.length > 0 ? (
            <Pagination
              className="pagination"
              // * 필수 값
              // *활성 페이지
              activePage={page}
              // 페이지당 항목 수
              itemsCountPerPage={1}
              // 페이지 총 아이템수
              totalItemsCount={data.length}
              // 페이지 범위
              pageRangeDisplayed={6}
              // 이전 페이지 탐색 버튼의 텍스트
              prevPageText={'<'}
              // 다음 페이지 탐색 버튼의 텍스트
              nextPageText={'>'}
              // 페이지 변경 핸들러 pageNumber를 인수로 수신
              onChange={handlePageChange}
            />
          ) : null}
          <BackBtn onClick={linkSnowmanGarden}>뒤로가기</BackBtn>
        </Main>
        <Background>
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
}
const Wrap = styled.div`
  z-index: 100;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;

  .pagination {
    position: absolute;
    bottom: 10vh;
    width: 100%;
    color: #0f1322;
    z-index: 99;
  }
`;

const MainText = styled.div`
  z-index: 99;

  margin: 2rem;
  font-size: 1.5rem;
`;

const Snowman = styled.div`
  perspective: 600px;
  width: 100%;
  margin: auto;
  max-width: 200px;
  max-height: 298px;
  z-index: 3;

  cursor: pointer;
  & img {
    max-width: 100%;
    height: auto;
  }
  .snowmanLetter {
    position: absoulte;
    width: 100%;

    transform: scale(1.8);
    margin-top: 25vh;
    objectfit: cover;
  }

  // 회전 효과
  @keyframes snomanFront {
    0% {
      transform: rotateY(0deg);
    }
    70% {
      opacity: 0;
    }
    100% {
      transform: rotateY(180deg);
      opacity: 0;
    }
  }

  @keyframes snowmanBack {
    0% {
      transform: rotateY(-180deg);
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  @keyframes letterFront {
    0% {
      transform: rotateY(0deg);
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: rotateY(180deg);
    }
  }

  @keyframes letterBack {
    0% {
      opacity: 0;
      transform: rotateY(-180deg);
    }
    70% {
      opacity: 0;
    }
    100% {
      transform: rotateY(0deg);
    }
  }
  .item.front {
    height: 0;
  }
  .item.back.first {
    opacity: 0;
  }
  .active.item.front {
    height: 0;
    animation-name: snomanFront;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .notActive.item.front {
    height: 0;
    animation-name: snowmanBack;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .active.item.back {
    height: 0;
    animation-name: letterBack;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .notActive.item.back {
    height: 0;
    animation-name: letterFront;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    margin: 0 !importent;
  }
`;

const LetterContent = styled.div`
  margin-left: -25%;
  margin-top: 20vh;
  width: 150%;
  height: 25vh !important;
  padding: 10%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow-y: scroll;
  border-radius: 15px;
  text-align: center;
  letter-spacing: 0.1rem;
  word-spacing: 0.2rem;
  font-size: 1.2rem;
`;

const Name = styled.span`
  position: absolute;
  bottom: 20vh;
  left: 50%;
  color: #0f1322d8;
  font-size: 1rem;
  width: 40%;
  height: 80px;
  line-height: 60px;
  text-align: center;
  z-index: 99;
  background-image: url(${process.env.PUBLIC_URL}/images/woodenBoard.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(7deg);
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
    background-color: #646464;
    cursor: pointer;
  }
`;

const Background = styled.div``;

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

const NullBox = styled.div`
  height: 60vh;
`;
