import { HeaderStyled } from "./styled";
import { Image } from "../../basicStyled";
import { Link } from "../../basicStyled";
import logo from "../../images/insart-logo.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <Image src={logo} width={"100px"} />
      <Link
        href="https://github.com/nikita-react/currency-converter"
        target="_blank"
      >
        https://github.com/nikita-react/currency-converter
      </Link>
    </HeaderStyled>
  );
};
export default Header;
