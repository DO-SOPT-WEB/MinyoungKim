import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const ChooseRandomPage = ({ RandomDetails }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <div>
            <DetailsContainer>
              <h2>랜덤추천</h2>
              <ButtonContainer>
                <StartButton type="button" onClick={RandomDetails}>
                  <p>Start!</p>
                </StartButton>
              </ButtonContainer>
            </DetailsContainer>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default ChooseRandomPage;

const Container = styled.main`
  ${({ theme }) => theme.common.Container};
  background-color : ${({ theme }) => theme.colors.favYellow};
`;

const DetailsContainer = styled.div`
  ${({ theme }) => theme.common.Container};
`;

const ButtonContainer = styled.div`
  ${({ theme }) => theme.common.ButtonContainer};
`;
const StartButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 15rem;
  height: 15rem;

  border: none;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.buttonFont};
  
  transition-duration: 0.4s;
  
  cursor: pointer;

  &:hover {
    ${({ theme }) => theme.common.HoverButton};
  }
  &:focus {
    outline: none;
  }
`;
