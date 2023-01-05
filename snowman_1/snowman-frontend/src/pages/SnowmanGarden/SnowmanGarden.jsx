import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import axios from 'axios';
import { API } from '../../config';
import styled from 'styled-components';

import AllContainer from '../../components/AllContainer';
import MainText from './MainText';
import BugerModal from './BugerModal';
import SnowmanList from './SnowmanList';

import MainBtn from './MainBtn';

export default function SnowmanGarden(props) {
  const location = useLocation();

  const [data, setData] = useState([]);

  const [nickname, setNickname] = useState('');
  const [gardenEmail, setGardenEmail] = useState();
  const [connect, setConnect] = useState(false);

  // 로그인유저정보
  const { user: currentUser } = useSelector((state) => state.auth);
  
  // 주소 정보
  const emailPath = location.pathname;
  const emailLocation = emailPath.substring(15);

  useEffect(() => {
    setGardenEmail(emailLocation);

    async function fetchData() {
      const result = await axios(`${API.SNOWMAN}${gardenEmail}`);
      if (result) {
        setData(result.data.snowmans);
        setNickname(result.data.nickname);
      }
    }
  
    if (gardenEmail !== undefined) {
      fetchData();
      setConnect(true);
    }
  }, [gardenEmail]);

  if (connect) {
    return (
      <AllContainer>
        <Main>
          <BugerModal gardenEmail={gardenEmail} currentUser={currentUser} />
          <MainText data={data} nickname={nickname} gardenEmail={gardenEmail} />
          <Garden>
            <Snowman>
              <SnowmanList data={data} gardenEmail={gardenEmail} />
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
            <MainBtn gardenEmail={gardenEmail} currentUser={currentUser} />
          </Garden>
        </Main>
      </AllContainer>
    );
  }

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
  
  .snowman1 {
    position: absolute;
    bottom: 7vh;
    left: 39.5%;
    transform: scale(1.8);
    z-index: 106;
  }
  .snowman2 {
    position: absolute;
    bottom: 13vh;
    left: 18%;
    transform: scale(1.8);
    z-index: 105;
  }
  .snowman3 {
    position: absolute;
    bottom: 13vh;
    right: 20%;
    transform: scale(1.8);
    z-index: 105;
  }
  .snowman4 {
    position: absolute;
    bottom: 20vh;
    left: 6%;
    transform: scale(1.8);
    z-index: 104;
  }
  .snowman5 {
    position: absolute;
    bottom: 20vh;
    left: 39.5%;
    transform: scale(1.8);
    z-index: 104;
  }
  .snowman6 {
    position: absolute;
    bottom: 20vh;
    right: 8%;

    transform: scale(1.8);
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
