import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

export default function ShareUrl() {
  // window 객체에서 현재 url 가져오기
  const currentUrl = window.location.href;
  const alertUrl = () => {
    alert('주소가 복사되었어요! 친구들에게 공유해보세요☃');
  };
  return (
    <>
      <CopyToClipboard text={currentUrl}>
        <ShareBtn onClick={alertUrl}># 공유하기</ShareBtn>
      </CopyToClipboard>
    </>
  );
}

const ShareBtn = styled.button`
  display: inline;
  margin: 1rem 1rem 1rem 0rem;
  padding: 0.6rem;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 5px;
  color: #dcdcdc;
  font-size: 1rem;
  font-family: 'bitbit';

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: white;
    cursor: pointer;
  }
`;
