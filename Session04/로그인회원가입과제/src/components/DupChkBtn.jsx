import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

// - [x] ID 중복체크를 하지 않은 경우 검정색입니다.
// - [ ] ID 중복체크 결과 중복인 경우 빨간색입니다.
// - [ ] ID 중복체크 결과 중복이 아닌 경우 초록색입니다. 

const DupChkBtn = (btnProps) => {
  const {isChecked, isExist} = btnProps;
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/login');
  }
  return isChecked ? (
    isExist ? (
      <DupChkBtnWrapper type="button" onClick={handleClickButton}>
        회원가입
      </DupChkBtnWrapper>
    ) : (
      <DupChkBtnWrapper type="button" onClick={handleClickButton}>
        회원가입
      </DupChkBtnWrapper>
    )
  ) : (
    <DupChkBtnInactivated>중복 확인</DupChkBtnInactivated>
  );
  
};

export default DupChkBtn;

const DupChkBtnWrapper = styled.button`
  background-color: black;
  color: white;

  padding: 10px 15px;
  border-radius: 0;

  background-color: ${props => (props.isEqual ? 'red' : 'green')};
`
const DupChkBtnInactivated = styled.div`
  border-radius: 0;

  padding: 10px 15px;
  width:9vw;

  background-color: black;
  color: white; 
`