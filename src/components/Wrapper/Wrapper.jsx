import { WrapperStyled } from "./styled";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

const Wrapper = () => {
  return (
    <WrapperStyled>
      <Header />
      <Main />
      <Footer />
    </WrapperStyled>
  );
};
export default Wrapper;
