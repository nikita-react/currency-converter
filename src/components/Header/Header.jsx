import { HeaderStyled } from "./styled";
import { Image } from "../../basicStyled";
import logo from "../../images/insart-logo.svg";
const Header = () => {
  return (
    <HeaderStyled>
      <Image src={logo} width={"100px"} />
    </HeaderStyled>
  );
};
export default Header;
