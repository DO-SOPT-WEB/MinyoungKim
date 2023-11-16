import styled from "styled-components";
import { useState } from "react";
// - [x] ID 중복체크를 하지 않은 경우 검정색입니다.
// - [ ] ID 중복체크 결과 중복인 경우 빨간색입니다.
// - [ ] ID 중복체크 결과 중복이 아닌 경우 초록색입니다. 

const DupChkBtn = (btnProps) => {
  const {dupCheck, isChecked} = btnProps;

  return ( 
      <DupChkBtnWrapper type="button" isChecked={isChecked} onClick={()=>{
        dupCheck(); 
      }}>
        중복 확인
      </DupChkBtnWrapper> 
  )
};

export default DupChkBtn;

const DupChkBtnWrapper = styled.button`
  background-color: black;
  color: white;
  width: 15vw;
  padding: 10px 15px;
  border-radius: 0;

  background-color: ${props => (props.isChecked === null)? "black" : ((props.isChecked ===false?  "green" : "red"))}
`
