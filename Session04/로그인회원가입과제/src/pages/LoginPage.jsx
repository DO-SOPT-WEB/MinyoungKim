import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import styled from "styled-components";
import * as M from "../common/MainContainerStyle";
import * as F from "../common/FormContainerStyle";
import * as B from "../common/ButtonContainerStyle";
import TextField from "../components/TextField";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/axios";
import NextBtn from "../components/NextBtn";
import LogInBtn from "../components/LogInBtn";
import { createPortal } from "react-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [reject, setReject] = useState("");

  //toast 타이머 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      setReject("");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [reject]);

  // Request API.
  const logIn = async () => {
    try {
      const response = await apiClient.post(
        `${import.meta.env.VITE_API}/api/v1/members/sign-in`,
        {
          username: id,
          password: password,
        }
      );
      myPage();
      const userId = response.data.id;
      navigate(`/mypage/${userId}`, {
        state: {
          username: response.data.username,
          nickname: response.data.nickname,
        },
      });
    } catch (err) {
      console.log(err.message);
      console.log(err.response);
      setReject(err.response.data.message);
    }
  };
  // Request API for myPage.
  const myPage = async () => {
    try {
      const response = await apiClient.get(
        `${import.meta.env.VITE_API}/api/v1/members/{memberId}`,
        {
          id: response.data.id,
          username: response.data.username,
          nickname: response.data.nickname,
        }
      );
      //받아올 때까지 기다린 다음 성공 올림
      console.log("마이페이지 정보:", response.data);
    } catch (err) {
      console.log(err.message);
      console.log(err.response);
      setReject(err.response.data.message);
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
            <LogInBtn logIn={logIn} />
          </B.ButtonContainer>
          <B.ButtonContainer>
            <NextBtn url={"/signup"} title={"회원가입"} />
          </B.ButtonContainer>
        </form>
      </F.FormContainer>
      {reject
        ? createPortal(
            <Toast>{reject}</Toast>,
            document.getElementById("toast-root")
          )
        : null}
    </M.MainContainer>
  );
};

export default LoginPage;

const Toast = styled.p` 
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5vh;
  width: 30vw;

  position: absolute;
  
  bottom: 8rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: red;
  color: white;
  font-weight: 600;
  border-radius: 5px;
`;
