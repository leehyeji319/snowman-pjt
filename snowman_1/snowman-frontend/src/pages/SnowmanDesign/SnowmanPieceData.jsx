import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  vertical: false,
  draggable: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2
};


export const SnowmanHead = ({ onChangeHead }) => {
  const snowmanHead = ['HeadBasic', 'HeadBoss', 'HeadDuck', 'HeadCookie', 'HeadHealth', 'HeadRudolph', 'HeadSanta', 'HeadTrump'];

  const onClickHead = (val) => {
    onChangeHead(val);
  }
  
  return (
    <StyledSlider {...settings}>
      {snowmanHead.map((head) =>
        <AttrBox key={Date.now()}> 
          <AttrHead onClick={() => onClickHead(head)}>
            <img src={process.env.PUBLIC_URL + '/images/snowmanPiece/' + head + '.png'} alt='HeadBasic' />
          </AttrHead>
        </AttrBox>
      )}
    </StyledSlider>
  )
}

export const SnowmanBody = ({ onChangeBody }) => {
  const snowmanBody = ['BodyBasic', 'BodyBoss', 'BodyDuck', 'BodyCookie', 'BodyHealth', 'BodyRudolph' ,'BodySanta', 'BodyTrump'];
  
  const onClickBody = (val) => {
    onChangeBody(val);
  }

  return (
    <StyledSlider {...settings}>
      {snowmanBody.map((body, i) =>
        <AttrBox key={Date.now()}>
          <AttrBody onClick={() => onClickBody(body)}>
            <img src={process.env.PUBLIC_URL + '/images/snowmanPiece/' + body + '.png'} alt='BodyBasic' />
          </AttrBody>
        </AttrBox>
      )}
    </StyledSlider>
  )
}

const StyledSlider = styled(Slider)`
width: 100%;
margin: auto;
justify-content: space-between;
text-align: center;
overflow: hidden;
padding: 0.5% 0;

.slick-track {
  display:flex;
}
`;

const AttrBox = styled.div`
`;


const AttrHead = styled.div`
  position:relative;
  color:black;
  max-width: 140px;
  max-height: 140px;
  margin: 0 5px;
  border: 1px solid #eef0f5;
  outline: 3px solid #f7f9fd;
  border-radius: 15px;
  background-color: white;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  
  & img {
    width: 150%;
    height: 150%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
  }

  &:hover {
  }
`;

const AttrBody = styled.div`
  position:relative;
  color:black;
  max-width: 140px;
  max-height: 140px;
  margin: 0 5px;
  border: 1px solid #eef0f5;
  outline: 3px solid #f7f9fd;
  border-radius: 15px;
  background-color: white;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  
  & img {
    width: 140%;
    height: 140%;
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translate(-50%, 0);
  }

  &:hover {
  }
`;


export default { SnowmanHead, SnowmanBody };