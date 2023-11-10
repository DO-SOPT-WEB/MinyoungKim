import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const ChoosePage = ({ ChooseFavor, ChooseRandom }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <div>
            <h2>원하는 추천방식을 골라줘!</h2>
            <ButtonContainer>
              <ChooseButton type="button" onClick={ChooseFavor}>
                <p>취향대로 추천</p>
              </ChooseButton>
              <ChooseButton type="button" onClick={ChooseRandom}>
                <p>랜덤 추천</p>
              </ChooseButton>
            </ButtonContainer>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default ChoosePage;

const Container = styled.main`
  ${({ theme }) => theme.common.Container};
  background-color : ${({ theme }) => theme.colors.favYellow};
`;
const ButtonContainer = styled.div`
  ${({ theme }) => theme.common.ButtonContainer};
`;
const ChooseButton = styled.button`
  ${({ theme }) => theme.common.Button};

  width: 15rem;
  height: 15rem;

  border: none;

  background-color : ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray};;
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
