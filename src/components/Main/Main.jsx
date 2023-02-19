import { MainStyled } from "./styled";
import { Container } from "../../basicStyled";
import CurrencyTable from "../CurrencyTable";

const Main = () => {
  return (
    <MainStyled>
      <Container maxWidth={"700px"}>
        <CurrencyTable />
      </Container>
    </MainStyled>
  );
};
export default Main;
