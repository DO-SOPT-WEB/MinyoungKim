import React from "react";
import styled from "styled-components";

const MyPageField = (myPageFieldProps) => {
  const { title, value} = myPageFieldProps;
  return (
    <MyPageFieldContainer>
      <article>{`${title} ${value}`}</article>
    </MyPageFieldContainer>
  );
};

const MyPageFieldContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:start;
  align-items:center;

  margin-top:10px;
  height:5vh;

  &>article{
    background-color:white;
    width:50vw;
    padding:10px 15px;
  }
`;

export default MyPageField;
