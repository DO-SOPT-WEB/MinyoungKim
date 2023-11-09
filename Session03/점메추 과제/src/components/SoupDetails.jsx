import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
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
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};

export default SoupDetailsPage;

const Container = styled.main`
  ${({ theme }) => theme.common.Container};
  background-color : ${({ theme }) => theme.colors.favYellow};
`;
const ButtonContainer = styled.div`
  ${({ theme }) => theme.common.ButtonContainer};
`;

const YesSoupButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.soup === 1 ? "pink" : "initial")};
  
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.DetailsFont};
  }
  &:hover {
    ${({ theme }) => theme.common.HoverButton};
  }
`;

const NoSoupButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 5rem;
  height: 8rem;

  background-color: ${(props) => (props.soup === 2 ? "pink" : "initial")};
  
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

  background-color: ${(props) => (props.isSoupSelected ? "pink" : "white")};
  color: ${(props) => (props.isSoupSelected ? "black" : "gray")};
  border: ${(props) => (props.isSoupSelected ? "2px solid black" : "gray")};

  font-size: ${({ theme }) => theme.fontSizes.BackForthFont};

  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;
