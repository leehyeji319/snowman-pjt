import ShareUrl from './ShareUrl';
import CaptureImage from './CaptureImage';
import styled from 'styled-components';


export default function MainText({ nickname, data }) {
  return (
    <>
      <UserText>
        <span style={{ color: '#f5c51f' }}>{nickname}</span> 님의 정원에
        <br></br>총 <span style={{ color: '#ce4545' }}>{data.length}</span> 개의
        눈사람이 만들어졌어요!
        <br></br>
        <ShareUrl />
        <CaptureImage />
      </UserText>
    </>
  );

}

const UserText = styled.div`
  font-size: 1.5rem;
  margin: 2rem;
  z-index: 9;
`;

