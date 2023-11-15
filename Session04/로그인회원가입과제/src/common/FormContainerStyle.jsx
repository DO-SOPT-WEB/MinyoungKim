import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 15vh 15vh;
  width: 80vw;
  height: 500px;

  background-color: pink;

  &>h2{
    font-size: 3rem;
    font-weight: bold;
    margin-top:3px;
  }

  &>form{
    display: flex;
    flex-direction: column;
    justify-content:center;

    padding:30px;
    width: 60vw;
    height: 300px;

    gap:8px;
  } 
`
