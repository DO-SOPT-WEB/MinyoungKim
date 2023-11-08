import styled from "styled-components";
import { useState, useEffect } from "react";
import SobaImage from '../assets/soba.jpg'
import RamenImage from '../assets/ramen.jpg'
import UdonImage from '../assets/udon.jpg'

const ShowRandomPage = ({ ResetRandomButton }) => {
  const [time, setTime] = useState(3);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    } else {
      const imageArray = [SobaImage, RamenImage, UdonImage];
      const imageNames = ['소바', '라멘', '우동'];
      const imageNum = Math.floor(Math.random() * imageArray.length);
      setImage(imageArray[imageNum]);
      setImageName(imageNames[imageNum]);
    }
  }, [time]);

  return (
    <Container>
      <RandomContainer>
        {time ? (
          <h2>{time}</h2>
        ) : (
          <>
            <h2>오늘의 추천음식은 바로 {imageName}!</h2>
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
  );
};
export default ShowRandomPage;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width:100vw;

    background-color: palegoldenrod;
`;

const RandomContainer=styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    gap: 1rem;
    padding: 0;
    margin-top:1rem;
    margin-bottom: 1rem;
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
