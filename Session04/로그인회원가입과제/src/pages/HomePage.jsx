import styled from "styled-components";
import Header from "../common/Header";
import { Link } from "react-router-dom";
import * as M from "../common/MainContainerStyle";
import * as F from "../common/FormContainerStyle";

const HomePage = () => {
  return (
    <M.MainContainer>
      <Header /> 
      <F.FormContainer>
        <MoveButton to="/login">로그인 먼저 해주세요</MoveButton>
      </F.FormContainer>
    </M.MainContainer>
  );
};

export default HomePage;

const MoveButton = styled(Link)`
  background-color: black;
  color: white;

  padding: 10px 15px;

  &:hover {
    background-color: white;
    color: purple;

    border: 2px solid black;
  }
`;