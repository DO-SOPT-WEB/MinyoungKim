import Header from "../common/Header";
import * as M from "../common/MainContainerStyle";
import * as F from "../common/FormContainerStyle";
import NextBtn from "../components/NextBtn";
import * as B from "../common/ButtonContainerStyle";

const HomePage = () => {
  return (
    <M.MainContainer>
      <Header />
      <F.FormContainer>
        <B.ButtonContainer>
          <NextBtn url={"/login"} title={"로그인 먼저 해주세요"} />
        </B.ButtonContainer>
      </F.FormContainer>
    </M.MainContainer>
  );
};

export default HomePage;
