import styled from "styled-components";
import { useState } from "react";

const DishDetailsPage = ({ BackButtonKey, ForthButtonKey }) => {
  const [dish, setDish] = useState(0);
  const [isDishSelected, setIsDishSelected] = useState(false);

  const RiceDish = () => {
    setDish(1);
    setIsDishSelected(true);
  };
  const NoodleDish = () => {
    setDish(2);
    setIsDishSelected(true);
  };
  const MeatFishDish = () => {
    setDish(3);
    setIsDishSelected(true);
  };

  return (
    <Container>
      <div>
        <h2>그럼 이중에는 뭐가 끌려?</h2>

        <ButtonContainer>
          <RiceDishButton type="button" onClick={RiceDish} dish={dish}>
            <p>밥</p>
          </RiceDishButton>
          <NoodleDishButton type="button" onClick={NoodleDish} dish={dish}>
            <p>면</p>
          </NoodleDishButton>
          <MeatFishDishButton type="button" onClick={MeatFishDish} dish={dish}>
            <p>고기or해물</p>
          </MeatFishDishButton>
        </ButtonContainer>

        <ButtonContainer>
          <BackButton type="button" onClick={BackButtonKey}>
            이전으로
          </BackButton>
          <ForthButton
            disabled={!isDishSelected}
            onClick={ForthButtonKey}
            isDishSelected={isDishSelected}
          >
            다음으로
          </ForthButton>
        </ButtonContainer>
      </div>
    </Container>
  );
};
export default DishDetailsPage;

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
const RiceDishButton = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
  width: 5rem;
  height: 5rem;

  background-color: ${(props) => (props.dish === 1 ? "pink" : "initial")};

  & > p {
    font-size: 1rem;
  }

  &:hover {
    background-color: pink; /* 호버 시 배경 색상 변화 */
    color: black;
    border: 2px solid black;
  }
`;
const NoodleDishButton = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
  width: 5rem;
  height: 5rem;

  background-color: ${(props) => (props.dish === 2 ? "pink" : "initial")};

  & > p {
    font-size: 1rem;
  }

  &:hover {
    background-color: pink; /* 호버 시 배경 색상 변화 */
    color: black;
    border: 2px solid black;
  }
`;
const MeatFishDishButton = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
  width: 5rem;
  height: 5rem;

  background-color: ${(props) => (props.dish === 3 ? "pink" : "initial")};

  & > p {
    font-size: 0.8rem;
  }

  &:hover {
    background-color: pink; /* 호버 시 배경 색상 변화 */
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

  background-color: ${(props) => (props.isDishSelected ? "pink" : "white")};
  color: ${(props) => (props.isDishSelected ? "black" : "gray")};
  border: ${(props) => (props.isDishSelected ? "2px solid black" : "gray")};

  text-align: center;
  text-decoration: none;
  display: inline-block;

  font-size: 1rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
