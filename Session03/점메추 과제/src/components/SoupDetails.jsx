import styled from "styled-components";
import { useState } from "react";

const SoupDetailsPage = ({
  BackButtonKey,
  ForthButtonKey,
  selectYesSoup,
  selectNoSoup,
}) => {
  const [soup, setSoup] = useState(0);
  const [isSoupSelected, setIsSoupSelected] = useState(false);

  const YesSoup = () => {
    setSoup(1);
    setIsSoupSelected(true);
    selectYesSoup(1);
  };
  const NoSoup = () => {
    setSoup(2);
    setIsSoupSelected(true);
    selectNoSoup(2);
  };

  return (
    <Container>
      <div>
        <h2>마지막으로 골라줘</h2>

        <ButtonContainer>
          <YesSoupButton type="button" onClick={YesSoup} soup={soup}>
            <p>국물 있음</p>
          </YesSoupButton>
          <NoSoupButton type="button" onClick={NoSoup} soup={soup}>
            <p>국물 없음</p>
          </NoSoupButton>
        </ButtonContainer>

        <ButtonContainer>
          <BackButton type="button" onClick={BackButtonKey}>
            이전으로
          </BackButton>
          <ForthButton
            disabled={!isSoupSelected}
            onClick={ForthButtonKey}
            isSoupSelected={isSoupSelected}
          >
            결과보기
          </ForthButton>
        </ButtonContainer>
      </div>
    </Container>
  );
};

export default SoupDetailsPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;

  background-color: palegoldenrod;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  gap: 1rem;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const YesSoupButton = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  flex-grow: 1;

  width: 5rem;
  height: 5rem;

  background-color: ${(props) => (props.soup === 1 ? "pink" : "initial")};
  & > p {
    font-size: 1rem;
  }
  &:hover {
    background-color: pink;
    color: black;
    border: 2px solid black;
  }
`;

const NoSoupButton = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  flex-grow: 1;

  width: 5rem;
  height: 5rem;

  background-color: ${(props) => (props.soup === 2 ? "pink" : "initial")};
  & > p {
    font-size: 1rem;
  }
  &:hover {
    background-color: pink;
    color: black;
    border: 2px solid black;
  }
`;

const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  flex-grow: 1;

  border: 2px solid black;
  background-color: pink;
  color: black;

  text-align: center;
  text-decoration: none;

  display: inline-block;

  font-size: 1rem;
  transition-duration: 0.4s;

  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const ForthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  flex-grow: 1;

  border: none;

  background-color: ${(props) => (props.isSoupSelected ? "pink" : "white")};
  color: ${(props) => (props.isSoupSelected ? "black" : "gray")};
  border: ${(props) => (props.isSoupSelected ? "2px solid black" : "gray")};

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;

  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
