import { useEffect } from "react";
import { MainStyled } from "./styled";
import { Container } from "../../basicStyled";
import CurrencyTable from "../CurrencyTable";
import { useDispatch } from "react-redux";
import { getCurrency } from "../../store/currencySlice";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  return (
    <MainStyled>
      <Container maxWidth={"700px"}>
        <CurrencyTable />
      </Container>
    </MainStyled>
  );
};
export default Main;
