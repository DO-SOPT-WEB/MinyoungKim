import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NextBtn = (btnPrps) => {
  const {url,title} = btnPrps;
  const navigate = useNavigate();

  return (
    <NextBtnWrapper
      type="button"
      onClick={()=>{
        navigate(url);
    }}>{title}
    </NextBtnWrapper>
  );
};

export default NextBtn;

const NextBtnWrapper=styled.button`
  background-color: black;
  color: white;

  padding: 10px 15px;
  border-radius: 0;

  &:hover {
    background-color: white;
    color: purple;
    border: 2px solid black;
  }
`