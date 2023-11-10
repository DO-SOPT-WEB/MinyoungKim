import styled, { ThemeProvider, keyframes } from "styled-components";
import theme from "../styles/theme";
import { useState, useEffect } from "react";
import IMAGE_DATA from "../data/imgData";

const ShowFavorPage = ({ ResetFavorButton, selectedFavor, selectedDish, selectedSoup }) => {
  const [time, setTime] = useState(0);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  //0~17
  //favor(1) + dish(1/2/3) + soup(1/2) : 111 112 121 122 131 132 (0 1 2 3 4 5 )
  //favor(2) + dish(1/2/3) + soup(1/2) : 211 212 221 222 231 232 (6 7 8 9 10 11)
  //favor(3) + dish(1/2/3) + soup(1/2) : 311 312 321 322 331 332 (12 13 14 15 16 17)
  
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    } else {
      const imageNum = 6*selectedFavor + 2*selectedDish + 1*selectedSoup;
      setImage(IMAGE_DATA[imageNum].src);
      setImageName(IMAGE_DATA[imageNum].name);
    }
  }, [time]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <RandomContainer>
            {time ? (
              <CountDown>{time}</CountDown>
            ) : (
              <>
                <h2>오늘의 추천음식은 바로 {imageName} **</h2>
                <ImageContainer>
                  <img src={image} alt={imageName} />
                </ImageContainer>
                <ButtonContainer>
                  <ResetButton type="button" onClick={ResetFavorButton}>
                    다시하기
                  </ResetButton>
                </ButtonContainer>
              </>
            )}
          </RandomContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default ShowFavorPage;

const Container = styled.main`
  ${({ theme }) => theme.common.Container};
  background-color : ${({ theme }) => theme.colors.favYellow};
`;

const RandomContainer = styled.main`
  ${({ theme }) => theme.common.Container};
`;

const TimerAnimation = keyframes`
  0% {
    transform: scale(10);
    opacity: 1;
    color: white;
  }

  100% {
    transform: scale(10);
    opacity: 1;
    color: #db6060; 
  }
`;

const CountDown = styled.h2` 
  animation: ${TimerAnimation} 1s linear infinite;
  height:20rem;

  margin-top: 2rem;
  margin-bottom: 1rem;

  font-weight: 800;
`
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

const ButtonContainer = styled.div`
  ${({ theme }) => theme.common.ButtonContainer};
`;

const ImageContainer = styled.div`
  ${({ theme }) => theme.common.ButtonContainer};

  margin-top: 2rem;
  margin-bottom: 1rem;

  & > img {
    width: 18rem;
  }
`;
