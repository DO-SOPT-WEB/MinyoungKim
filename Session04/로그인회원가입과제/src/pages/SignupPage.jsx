import {useState, useEffect} from "react";
import Header from "../common/Header";
import * as M from "../common/MainContainerStyle";
import * as F from "../common/FormContainerStyle";
import * as B from "../common/ButtonContainerStyle";
import SignUpBtn from "../components/SignUpBtn";
//import { Link } from "react-router-dom";
import apiClient from '../api/axios';
import TextField from "../components/TextField";
import DupChkBtn from "../components/DupChkBtn";
import styled from "styled-components";

const SignupPage = () => {
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  const [checkPassword, setCheckPassword] = useState(null);
  const [nickname, setNickname] = useState(null); 

  const [btnState, setBtnState] = useState(false);

  useEffect(
    ()=>{    
      console.log(checkPassword);
      console.log(password);
      if(checkPassword === password){
        setBtnState(true);
      }
    },[checkPassword,password] //변경이 있으면 useEffect가 실행된다
  );

  // Request API.
  const signUp = async() =>{
    try{
      const response = await apiClient.post(`${import.meta.env.VITE_API}/api/v1/members`, {
        "username": id,
        "nickname": nickname,
        "password": password,
      },
      );
      //받아올 때까지 기다린 다음 성공 올림
      console.log('성공', response.data);
    }catch(err){
      console.log(err.message);
      console.log(err.response);
    }
  }
  return (
    <M.MainContainer>
      <Header />
      <F.FormContainer>
        <h2>SignUp</h2>
        <form>
          <TextField
            label = "ID"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
          <DupChkBtn/>
          <TextField
            label = "비밀번호"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <TextField
            label = "비밀번호 확인"
            placeholder="비밀번호를 한번 더 입력해주세요"
            value={checkPassword}
            onChange={(event) => {
              setCheckPassword(event.target.value);
            }}
          />
          <TextField
            label = "닉네임"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          />
          <B.ButtonContainer>
            <SignUpBtn id={id} password={password} nickname={nickname} signUp={signUp}/>
          </B.ButtonContainer>
        </form>
      </F.FormContainer>
    </M.MainContainer>
  );
};

export default SignupPage;