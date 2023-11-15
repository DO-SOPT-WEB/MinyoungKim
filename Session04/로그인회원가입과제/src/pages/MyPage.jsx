import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import * as M from "../common/MainContainerStyle";
import * as F from "../common/FormContainerStyle";
import * as B from "../common/ButtonContainerStyle";
import MyPageDetail from "./MyPageDetail";

const MyPage = (mypage) => {
  const { id, username, nickname } = mypage;

  return (
    <M.MainContainer>
      <Header />
      <F.FormContainer>
        <MyPageDetail id ={id} username={username} nickname={nickname} />
      </F.FormContainer>
    </M.MainContainer>
  );
};

export default MyPage;
