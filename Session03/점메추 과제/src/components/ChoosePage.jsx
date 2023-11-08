import styled from "styled-components";

const ChoosePage = ({ChooseFavor, ChooseRandom}) =>{

    return(
        <Container>
            <div>
                <h2>원하는 추천방식을 골라줘!</h2>
                <ButtonContainer>
                    <ChooseButton type ="button" onClick={ChooseFavor}><p>취향대로 추천</p></ChooseButton>
                    <ChooseButton type="button" onClick={ChooseRandom}><p>랜덤 추천</p></ChooseButton>
                </ButtonContainer>
            </div>
        </Container>
    )
}
export default ChoosePage;

const Container=styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width:100vw;

    background-color: palegoldenrod;
`
const ButtonContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    gap: 1rem;
    padding: 0;
    margin-top:1rem;
    margin-bottom: 1rem;
`
const ChooseButton=styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  flex-grow: 1;
  width: 15rem;
  height: 15rem;
  
  border: none;
  background-color: white; /* 기본 배경 색상 */
  color: gray;

  text-align: center;
  text-decoration: none;
  display: inline-block;

  font-size: 2rem;

  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: pink; /* 호버 시 배경 색상 변화 */
    color: black;
    border: 2px solid black; 
  }
  &:focus {
    outline: none;
  }

`;


