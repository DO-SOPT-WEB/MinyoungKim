import styled from "styled-components";

const ChooseRandomPage = ({RandomDetails}) =>{

    return(
        <Container>
            <div>
                <DetailsContainer>
                    <h2>랜덤추천</h2>
                    <ButtonContainer>
                        <StartButton type ="button" onClick={RandomDetails}><p>Start!</p></StartButton>
                    </ButtonContainer>
                </DetailsContainer>
            </div>
        </Container>
    )
}
export default ChooseRandomPage;

const Container=styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width:100vw;

    background-color: palegoldenrod;
`
const DetailsContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
const StartButton=styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    flex-grow: 1;
    
    border: none;
    background-color: gray; /* 기본 배경 색상 */
    color: white;

    text-align: center;
    text-decoration: none;
    display: inline-block;

    font-size: 1rem;

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
`