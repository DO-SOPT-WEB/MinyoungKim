import styled from "styled-components";

// 공통 헤더
const Header = () => {
  return (
    <HeaderContainer>
      <h1>민영 홈페이지</h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width:100vw;
  height:10vh;

  position: stick;

  background-color: beige;

  & > h1 {
    font-size: 1rem;
    font-weight: bold;
  }
`;