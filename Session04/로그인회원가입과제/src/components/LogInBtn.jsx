import styled from "styled-components";

// - [ ] 아이디와 비밀번호 입력후 로그인 버튼을 눌렀을시 성공하면 `/mypage/:userId` 로 넘어갑니다. 
// (여기서 `userId`는 로그인 성공시 반환 받은 사용자의 id)

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
// const SignUpBtnInactivated = styled.div`
//   border-radius: 0;

//   padding: 10px 15px;
  
//   background-color: brown;
//   opacity: 70%;
// `