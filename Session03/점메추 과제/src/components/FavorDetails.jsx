import styled from "styled-components";
import { useState } from "react";

const FavorDetailsPage = ({ BackButtonKey, ForthButtonKey }) => {
  const [food, setFood] = useState(0);
  const [isFoodSelected, setIsFoodSelected] = useState(false);

  const KrFood = () => {
    setFood(1);
    setIsFoodSelected(true);
  };
  const JpnFood = () => {
    setFood(2);
    setIsFoodSelected(true);
  };
  const ChnFood = () => {
    setFood(3);
    setIsFoodSelected(true);
  };

  return (
    <Container>
      <div>
        <h2>오늘은 어떤 종류가 먹고 싶어?</h2>

        <ButtonContainer>
          <KrFoodButton type="button" onClick={KrFood} food={food}><p>한식</p></KrFoodButton>         
          <JpnFoodButton type="button" onClick={JpnFood} food={food}><p>일식</p></JpnFoodButton>
          <ChnFoodButton type="button" onClick={ChnFood} food={food}><p>중식</p></ChnFoodButton>  
        </ButtonContainer>

        <ButtonContainer>
          <BackButton type="button" onClick={BackButtonKey}>이전으로</BackButton>
          <ForthButton disabled={!isFoodSelected} onClick={ForthButtonKey} isFoodSelected={isFoodSelected}>다음으로</ForthButton>
        </ButtonContainer>
      </div>
    </Container>
  );
};

export default FavorDetailsPage;

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

const KrFoodButton = styled.button`
  display: flex;
  position: relative;
  justify-content: center;

  flex-grow: 1;
  width: 5rem;
  height: 5rem;

  background-color: ${(props) => (props.food === 1 ? "pink" : "initial")};

  & > p {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: pink; /* 호버 시 배경 색상 변화 */
    color: black;
    border: 2px solid black; 
  }
`;

const JpnFoodButton = styled.button`
  display: flex;
  position: relative;
  justify-content: center;

  flex-grow: 1;
  width: 5rem;
  height: 5rem;

  background-color: ${(props) => (props.food === 2 ? "pink" : "initial")};

  &:hover {
    background-color: pink; /* 호버 시 배경 색상 변화 */
    color: black;
    border: 2px solid black; 
  }
  & > p {
    font-size: 1.5rem;
  }
`;

const ChnFoodButton = styled.button`
  display: flex;
  position: relative;
  justify-content: center;

  flex-grow: 1;

  width: 5rem;
  height: 5rem;

  background-color: ${(props) => (props.food === 3 ? "pink" : "initial")};

  &:hover {
    background-color: pink; /* 호버 시 배경 색상 변화 */
    color: black;
    border: 2px solid black; 
  }
  & > p {
    font-size: 1.5rem;
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

  background-color: ${(props) => (props.isFoodSelected ? "pink" : "white")};
  color: ${(props) => (props.isFoodSelected ? "black" : "gray")};
  border: ${(props) => (props.isFoodSelected ? "2px solid black" : "gray")};

  text-align: center;
  text-decoration: none;
  display: inline-block;
  
  font-size: 1rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
