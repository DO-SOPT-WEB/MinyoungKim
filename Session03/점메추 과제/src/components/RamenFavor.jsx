import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import RamenImage from "../assets/ramen.jpg";

const RamenFavorPage = ({ ResetFavorButton }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <div>
            <h2>오늘의 추천음식은 바로 라멘!</h2>
            <ImageContainer>
              <img src={RamenImage} alt="ramen_image" />
            </ImageContainer>
            <ButtonContainer>
              <ResetButton type="button" onClick={ResetFavorButton}>
                다시하기
              </ResetButton>
            </ButtonContainer>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default RamenFavorPage;

const Container = styled.main`
  ${({ theme }) => theme.common.Container};
  background-color : ${({ theme }) => theme.colors.favYellow};
`;
const ButtonContainer = styled.div`
  ${({ theme }) => theme.common.ButtonContainer};
`;

const ResetButton = styled.button`
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
const ImageContainer = styled.div`
  ${({ theme }) => theme.common.ButtonContainer};

  margin-top: 2rem;
  margin-bottom: 1rem;

  & > img {
    width: 25rem;
    height:18rem;
  }
`;
