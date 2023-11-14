import styled from "styled-components";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <MainContainer>
      <Header /> 
      <CommonContainer>
        <MoveButton to="/login">로그인 먼저 해주세요</MoveButton>
      </CommonContainer>
    </MainContainer>
  );
};

export default HomePage;

const MainContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

`

const CommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 15vh 15vh;
  width: 80vw;
  height: 500px;

  background-color: pink;
`
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