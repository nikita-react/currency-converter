import { useEffect, useState } from "react";
import { SelectInputWrapper, FlexWrapper } from "./styled";
import SelectComponent from "../SelectComponent";
import InputComponent from "../InputComponent";
import { useSelector } from "react-redux";

const Convector = () => {
  const { currencyData } = useSelector((state) => state.currency);
  const [foreignCurrency, setForeignCurrency] = useState("EUR");
  const [amountInUah, setAmountInUah] = useState(0);
  const [amountInForeign, setAmountInForeign] = useState(0);

  const getRate = (amountInUah, foreignCurrency) => {
    const exchange = currencyData.find((i) => {
      return i.ccy === foreignCurrency;
    });

    if (!exchange) {
      return;
    }
    const foreignSale = exchange.sale;
    return amountInUah / foreignSale;
  };

  useEffect(() => {
    setAmountInForeign(getRate(amountInUah, foreignCurrency));
  }, [amountInUah, foreignCurrency, currencyData]);

  return (
    <FlexWrapper>
      <SelectInputWrapper>
        <SelectComponent name={"Currency"} value={"UAH"} />
        <InputComponent value={amountInUah} handleChange={setAmountInUah} />
      </SelectInputWrapper>
      <SelectInputWrapper>
        <SelectComponent
          name={"Currency"}
          handleChange={setForeignCurrency}
          data={currencyData}
          value={foreignCurrency}
        />
        <InputComponent value={amountInForeign} disabled />
      </SelectInputWrapper>
    </FlexWrapper>
  );
};

export default Convector;
