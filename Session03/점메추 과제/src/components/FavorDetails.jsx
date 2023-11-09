import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
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
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <div>
            <h2>오늘은 어떤 종류가 먹고 싶어?</h2>

            <ButtonContainer>
              <KrFoodButton type="button" onClick={KrFood} food={food}>
                <p>한식</p>
              </KrFoodButton>
              <JpnFoodButton type="button" onClick={JpnFood} food={food}>
                <p>일식</p>
              </JpnFoodButton>
              <ChnFoodButton type="button" onClick={ChnFood} food={food}>
                <p>중식</p>
              </ChnFoodButton>
            </ButtonContainer>

            <ButtonContainer>
              <BackButton type="button" onClick={BackButtonKey}>
                이전으로
              </BackButton>
              <ForthButton
                disabled={!isFoodSelected}
                onClick={ForthButtonKey}
                isFoodSelected={isFoodSelected}
              >
                다음으로
              </ForthButton>
            </ButtonContainer>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default FavorDetailsPage;

const Container = styled.main`
  ${({ theme }) => theme.common.Container};
  background-color : ${({ theme }) => theme.colors.favYellow};
`;

const ButtonContainer = styled.div`
  ${({ theme }) => theme.common.ButtonContainer};
`;

const KrFoodButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.food === 1 ? "pink" : "initial")};

  &:hover {
    ${({ theme }) => theme.common.HoverButton};
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.DetailsFont};
  }
`;

const JpnFoodButton = styled.button`
  ${({ theme }) => theme.common.Button};
  
  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.food === 2 ? "pink" : "initial")};

  &:hover {
    ${({ theme }) => theme.common.HoverButton};
  }
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.DetailsFont};
  }
`;

const ChnFoodButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.food === 3 ? "pink" : "initial")};

  &:hover {
    ${({ theme }) => theme.common.HoverButton};
  }
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.DetailsFont};
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

  background-color: ${(props) => (props.isFoodSelected ? "pink" : "white")};
  color: ${(props) => (props.isFoodSelected ? "black" : "gray")};
  border: ${(props) => (props.isFoodSelected ? "2px solid black" : "gray")};

  font-size: ${({ theme }) => theme.fontSizes.BackForthFont};

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
