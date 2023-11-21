import styled from "styled-components";
import { useState } from "react";

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

