import { HeaderStyled } from "./styled";
import { Image } from "../../basicStyled";
import { Link } from "../../basicStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <Link
        href="https://github.com/nikita-react/currency-converter"
        target="_blank"
      >
        github.com/currency-converter
      </Link>
    </HeaderStyled>
  );
};
export default Header;
