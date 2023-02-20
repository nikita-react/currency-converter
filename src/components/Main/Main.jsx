import { useEffect } from "react";
import { MainStyled } from "./styled";
import { Container } from "../../basicStyled";
import CurrencyTable from "../CurrencyTable";
import { useDispatch, useSelector } from "react-redux";
import { getCurrency } from "../../store/currencySlice";
import Convector from "../Convector";
import ErrorFallback from "../ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  const resetApp = () => {
    localStorage.removeItem("request-counter");
    dispatch(getCurrency());
  };

  return (
    <MainStyled>
      <Container maxWidth={"700px"}>
        <ErrorBoundary onReset={resetApp} FallbackComponent={ErrorFallback}>
          <CurrencyTable />
          <Convector />
        </ErrorBoundary>
      </Container>
    </MainStyled>
  );
};
export default Main;
