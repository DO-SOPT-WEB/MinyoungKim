import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useState } from "react";

const SoupDetailsPage = ({BackButtonKey, ForthButtonKey, YesSoup, NoSoup}) => {
  const [isSoupSelected, setIsSoupSelected]=useState(false);
  const [soup, setSoup] = useState(10);
  const handleYesSoup =()=>{
    setSoup(0);
    YesSoup();
    setIsSoupSelected(true);
  }
  const handleNoSoup=()=>{
    setSoup(1);
    NoSoup();
    setIsSoupSelected(true);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <div>
            <h2>마지막으로 골라줘</h2>
            <ButtonContainer>
              <YesSoupButton type="button" onClick={handleYesSoup} soup={soup}>
                <p>국물 있음</p>
              </YesSoupButton>
              <NoSoupButton type="button" onClick={handleNoSoup} soup={soup}>
                <p>국물 없음</p>
              </NoSoupButton>
            </ButtonContainer>

            <ButtonContainer>
              <BackButton type="button" onClick={BackButtonKey}>
                이전으로
              </BackButton>
              <ForthButton disabled={!isSoupSelected} onClick={ForthButtonKey} isSoupSelected={isSoupSelected}>
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

  background-color: ${(props) => (props.soup === 0 ? "pink" : "initial")};
  
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

  background-color: ${(props) => (props.soup === 1 ? "pink" : "initial")};
  
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
