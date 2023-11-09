import styled from "styled-components";
import RamenImage from "../assets/ramen.jpg";

const RamenFavorPage = ({ ResetFavorButton }) => {
  return (
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
  );
};
export default RamenFavorPage;

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

const ResetButton = styled.button`
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
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  gap: 1rem;
  padding: 0;

  margin-top: 1rem;
  margin-bottom: 1rem;
`;
