import { TbShovel } from 'react-icons/tb';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import AllContainer from '../../components/AllContainer';

export default function Error404() {
  const navigate = useNavigate();

  const linkSnowmanGarden = () => {

    navigate('/');

  };
  return (
    <AllContainer>
      <Main>
        <div className="main-text">
          <h1>
            페이지를 찾을 수 없습니다.
            <BackBtn onClick={linkSnowmanGarden}>메인페이지로 돌아가기</BackBtn>
          </h1>
        </div>
        <div className="ground">
          <div className="mound">
            <ErrorTitle className="mound_text">
              404
              <TbShovel size="60" />
            </ErrorTitle>

            <div className="mound_spade"></div>
          </div>
        </div>
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

  .main-text {
    padding: 20vh 20px 0 20px;
    text-align: center;
    line-height: 2em;
    font-size: 2rem;
  }
`;

const ErrorTitle = styled.div`
  color: #ce4545;
  font-size: 6rem;
  margin: 20% 0 10%;
  transform: rotate(6deg);
  text-shadow: 2px 3px 2px pink;
`;

const BackBtn = styled.div`
  width: 50%;
  font-size: 1rem;
  color: #999;
  background-color: white;
  line-height: 20px;

  padding: 0.6rem 0 0.6rem 0;
  text-align: center;
  z-index: 99;
  border-radius: 5px;
  margin: auto;

  &:hover {
    color: white;
    background-color: #999;
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
