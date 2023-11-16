import {useLocation } from "react-router-dom";
import Header from "../common/Header";
import * as M from "../common/MainContainerStyle";
import * as F from "../common/FormContainerStyle";
import * as B from "../common/ButtonContainerStyle";

import NextBtn from "../components/NextBtn";
import MyPageField from "../components/MyPageField";
import styled from "styled-components";

const MyPage = () => {
  //ID를 받아오면 ID에 맞게
  const location = useLocation();
  const username = location.state.username;
  const nickname = location.state.nickname;

  return (
    <M.MainContainer>
      <Header />
      <F.FormContainer>
        <h2>MyPage</h2>
        <br/>
        <ImageContainer>
          <img alt="마이페이지 이미지" src="../assets/selfie.jpg"></img>
        </ImageContainer>
        <MyPageField title="ID: " value={username}/>
        <MyPageField title="닉네임: " value={nickname}/>
        <br/>
        <B.ButtonContainer>
          <NextBtn url={'/login'} title={'로그아웃'}/>
        </B.ButtonContainer>
      </F.FormContainer>
    </M.MainContainer>
  );
};

export default MyPage;

const ImageContainer=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:start;
  align-items:center;

  margin-top:10px;
  height:20vh;
  width: 20vh;
  padding: 10px 15px;

  background-color:black;
`
const Image=styled.img`
  margin-top:10px;
  height:20vh;
  width: 20vh;
  padding: 10px 15px;
`