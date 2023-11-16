import React, { useState } from "react";
import Header from "../common/Header";
//import { Link } from "react-router-dom";
import * as M from "../common/MainContainerStyle";
import * as F from "../common/FormContainerStyle";
import * as B from "../common/ButtonContainerStyle";
import TextField from "../components/TextField";
import { useNavigate} from "react-router-dom";
import apiClient from "../api/axios";
import NextBtn from "../components/NextBtn";
import LogInBtn from "../components/LogInBtn";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // Request API.
  const logIn = async () => {
    try {
      const response = await apiClient.post(`${import.meta.env.VITE_API}/api/v1/members/sign-in`, {
        "username": id, 
        "password": password, 
      });
      myPage(); 
      const userId=response.data.id; 
      navigate(`/mypage/${userId}`, {
        state: {
          username: response.data.username,
          nickname: response.data.nickname
        }
      })
    }catch (err) {
      console.log(err.message); 
      console.log(err.response);
    }
  };
    // Request API for myPage.
  const myPage = async () => {
    try {
      const response = await apiClient.get(
        `${import.meta.env.VITE_API}/api/v1/members/{memberId}`,{
          "id" : response.data.id,
          "username" : response.data.username,
          "nickname" : response.data.nickname,
        }
      );
      //받아올 때까지 기다린 다음 성공 올림
      console.log('마이페이지 정보:', response.data);
    } catch (err) {
      console.log(err.message);
      console.log(err.response);
    }
  };
  return (
    <M.MainContainer>
      <Header />
      <F.FormContainer>
        <h2>Login</h2>
        <form>
          <TextField
            label="ID"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
          <TextField
            label="Password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <br />
          <B.ButtonContainer>
            <LogInBtn logIn={logIn}/>
          </B.ButtonContainer>
          <B.ButtonContainer>
            <NextBtn url={'/signup'} title={'회원가입'}/>
          </B.ButtonContainer>
        </form>
      </F.FormContainer>
    </M.MainContainer>
  );
};

export default LoginPage;