import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../common/Header";
import * as M from "../common/MainContainerStyle";
import * as F from "../common/FormContainerStyle";
import * as B from "../common/ButtonContainerStyle";
const MyPageDetail = ({ id, username, nickname }) => {
  const navigate = useNavigate();

  const handleOnClickDetail = () => {
    navigate("/login");
  };
  //ID를 받아오면 ID에 맞게
  //const {id} = useParams();
  //const {postId} = useParams();

  //const targetPost =POST_LIST.find(({id})=> String(id) === postId);
  return (
    <M.MainContainer>
      <Header />
      <F.FormContainer>
        <h2>MyPage</h2>
        <img src=""></img>
        <Username>{targetPost.username}</Username>
        <Nickname>{targetPost.nickname}</Nickname>
        <B.ButtonContainer>
          <button onClick={handleOnClickDetail}>로그아웃</button>
        </B.ButtonContainer>
      </F.FormContainer>
    </M.MainContainer>
  );
};

export default MyPageDetail;

const PostContainer = styled.article`
  display: flex;
  flex-direction: column;

  gap: 20px;

  align-items: center;

  width: 290px;
  height: 300px;

  padding: 20px;

  background-color: lightgray;

  & > img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-color: white;
  }
`;

