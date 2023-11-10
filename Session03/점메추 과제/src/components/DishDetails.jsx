import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

import { useState } from "react";

const DishDetailsPage = ({ BackButtonKey, ForthButtonKey, RiceDish, NoodleDish, MeatFishDish }) => {
  const [dish, setDish] = useState(10);
  const [isDishSelected, setIsDishSelected] = useState(false);
  
  const handleRiceDish = () => {
    setDish(0);
    RiceDish();
    setIsDishSelected(true);
  };
  const handleNoodleDish = () => {
    setDish(1);
    NoodleDish();
    setIsDishSelected(true);
  };
  const handleMeatFishDish = () => {
    setDish(2);
    MeatFishDish();
    setIsDishSelected(true);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <div>
            <h2>그럼 이중에는 뭐가 끌려?</h2>
            <ButtonContainer>
              <RiceDishButton type="button" onClick={handleRiceDish} dish={dish}>
                <p>밥</p>
              </RiceDishButton>
              <NoodleDishButton type="button" onClick={handleNoodleDish} dish={dish}>
                <p>면</p>
              </NoodleDishButton>
              <MeatFishDishButton type="button" onClick={handleMeatFishDish} dish={dish}>
                <p>고기or해물</p>
              </MeatFishDishButton>
            </ButtonContainer>

            <ButtonContainer>
              <BackButton type="button" onClick={BackButtonKey}>
                이전으로
              </BackButton>
              <ForthButton disabled={!isDishSelected} onClick={ForthButtonKey} isDishSelected={isDishSelected}>
                다음으로
              </ForthButton>
            </ButtonContainer>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default DishDetailsPage;

const Container = styled.main`
  ${({ theme }) => theme.common.Container};
  background-color : ${({ theme }) => theme.colors.favYellow};
`;
const ButtonContainer = styled.div`
  ${({ theme }) => theme.common.ButtonContainer};
`;
const RiceDishButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.dish === 0 ? "pink" : "initial")};

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.DetailsFont};
  }

  &:hover {
    ${({ theme }) => theme.common.HoverButton};
  }
`;
const NoodleDishButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.dish === 1 ? "pink" : "initial")};

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.DetailsFont};
  }

  &:hover {
    ${({ theme }) => theme.common.HoverButton};
  }
`;
const MeatFishDishButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.dish === 2 ? "pink" : "initial")};

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.DetailsFont};
  }

  &:hover {
    ${({ theme }) => theme.common.HoverButton};
  }
`;

const BackButton = styled.button`
  ${({ theme }) => theme.common.Button};

  border: 2px solid black;

  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.BackForthFont};

  transition-duration: 0.4s;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
const ForthButton = styled.button`
  ${({ theme }) => theme.common.Button};

  border: none;

  background-color: ${(props) => (props.isDishSelected ? "pink" : "white")};
  color: ${(props) => (props.isDishSelected ? "black" : "gray")};
  border: ${(props) => (props.isDishSelected ? "2px solid black" : "gray")};

  font-size: ${({ theme }) => theme.fontSizes.BackForthFont};

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
