import React from "react";
import styled from "styled-components";

const TextField = (textFieldProps) => {
  const { label, placeholder, value, onChange } = textFieldProps;
  return (
    <TextFieldContainer>
      <label>{label}</label>
      <input
        type="text" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </TextFieldContainer>
  );
};

const TextFieldContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:start;
  align-items:center;
  
  gap:3vw;
  height:5vh;

  &>label{
    width:10vw;
    font-size:1rem;
  }

  &>input{
    width:40vw;
    padding: 10px 15px;
  }
`;

export default TextField;
