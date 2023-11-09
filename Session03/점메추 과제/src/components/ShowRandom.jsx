import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { useState, useEffect } from "react";
import SobaImage from "../assets/soba.jpg";
import RamenImage from "../assets/ramen.jpg";
import UdonImage from "../assets/udon.jpg";
import ChipotleImage from "../assets/chipotle.jpg";
import DosirakImage from "../assets/dosirak.jpg";
import FriesImage from "../assets/fries.jpg";
import PizzaImage from "../assets/pizza.jpg";

const imageData = [
  { id: 1, name: "Soba", src: SobaImage },
  { id: 2, name: "Ramen", src: RamenImage },
  { id: 3, name: "Udon", src: UdonImage },
  { id: 4, name: "Chipotle", src: ChipotleImage},
  { id: 5, name: "신칸센 도시락", src: DosirakImage},
  { id: 6, name: "Fries", src: FriesImage},
  { id: 7, name: "Pizza", src: PizzaImage}
];

const ShowRandomPage = ({ ResetRandomButton }) => {
  const [time, setTime] = useState(3);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    } else {
      const imageNum = Math.floor(Math.random() * imageData.length);
      setImage(imageData[imageNum].src);
      setImageName(imageData[imageNum].name);
    }
  }, [time]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <RandomContainer>
            {time ? (
              <h2>{time}</h2>
            ) : (
              <>
                <h2>오늘의 추천음식은 바로 {imageName} **</h2>
                <ImageContainer>
                  <img src={image} alt={imageName} />
                </ImageContainer>
                <ButtonContainer>
                  <ResetButton type="button" onClick={ResetRandomButton}>
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
export default ShowRandomPage;

const Container = styled.main`
  ${({ theme }) => theme.common.Container};
  background-color : ${({ theme }) => theme.colors.favYellow};
`;

const RandomContainer = styled.main`
  ${({ theme }) => theme.common.Container};
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
