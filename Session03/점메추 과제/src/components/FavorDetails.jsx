import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useState } from "react";

const FavorDetailsPage = ({ BackButtonKey, ForthButtonKey, KrFavor, JpnFavor, UsFavor }) => {
  const [favor, setFavor] = useState(10);
  const [isFavorSelected, setIsFavorSelected] = useState(false);

  const handleKrFavor = () => {
    setFavor(0);
    KrFavor();
    setIsFavorSelected(true);
  };
  const handleJpnFavor = () => {
    setFavor(1);
    JpnFavor();
    setIsFavorSelected(true);
  };
  const handleUsFavor = () => {
    setFavor(2);
    UsFavor();
    setIsFavorSelected(true);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <div>
            <h2>오늘은 어떤 종류가 먹고 싶어?</h2>

            <ButtonContainer>
              <KrFavorButton type="button" onClick={handleKrFavor} favor={favor}>
                <p>한식</p>
              </KrFavorButton>
              <JpnFavorButton type="button" onClick={handleJpnFavor} favor={favor}>
                <p>일식</p>
              </JpnFavorButton>
              <UsFavorButton type="button" onClick={handleUsFavor} favor={favor}>
                <p>양식</p>
              </UsFavorButton>
            </ButtonContainer>

            <ButtonContainer>
              <BackButton type="button" onClick={BackButtonKey}>
                이전으로
              </BackButton>
              <ForthButton
                disabled={!isFavorSelected}
                onClick={ForthButtonKey}
                isFavorSelected={isFavorSelected}
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

const KrFavorButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.favor === 0 ? "pink" : "initial")};

  &:hover {
    ${({ theme }) => theme.common.HoverButton};
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.DetailsFont};
  }
`;

const JpnFavorButton = styled.button`
  ${({ theme }) => theme.common.Button};
  
  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.favor === 1 ? "pink" : "initial")};

  &:hover {
    ${({ theme }) => theme.common.HoverButton};
  }
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.DetailsFont};
  }
`;

const UsFavorButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.favor === 2 ? "pink" : "initial")};

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

  background-color: ${(props) => (props.isFavorSelected ? "pink" : "white")};
  color: ${(props) => (props.isFavorSelected ? "black" : "gray")};
  border: ${(props) => (props.isFavorSelected ? "2px solid black" : "gray")};

  font-size: ${({ theme }) => theme.fontSizes.BackForthFont};

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
