import styled from "styled-components";

const LogInBtn = (btnProps) => {
  const {logIn} = btnProps;

  return (
    <LogInBtnWrapper
      type="button"
      onClick={()=>{
        logIn(); 
      }}>
      로그인
    </LogInBtnWrapper>
  )
};

export default LogInBtn;

const LogInBtnWrapper = styled.button`
  background-color: black;
  color: white;

  padding: 10px 15px;
  border-radius: 0;

  &:hover {
    background-color: white;
    color: purple;
    border: 2px solid black;
  }
`