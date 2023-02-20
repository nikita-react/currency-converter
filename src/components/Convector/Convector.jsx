import { useEffect, useState } from "react";
import { SelectInputWrapper, FlexWrapper } from "./styled";
import SelectComponent from "../SelectComponent";
import InputComponent from "../InputComponent";
import { useSelector } from "react-redux";

const getRate = (amountInUah, exchangeRates) => {
  if (amountInUah > 0 && exchangeRates > 0) {
    const result = amountInUah / exchangeRates;
    return result;
  }
};

const Convector = () => {
  const { currencyData } = useSelector((state) => state.currency);
  const [exchangeRates, setExchangeRates] = useState(0);
  const [amountInUah, setAmountInUah] = useState(0);
  const [amountInForeign, setAmountInForeign] = useState(0);
  useEffect(() => {
    setAmountInForeign(getRate(amountInUah, exchangeRates));
  }, [amountInUah, exchangeRates]);

  return (
    <FlexWrapper>
      <SelectInputWrapper>
        <SelectComponent name={"Currency"} value={"UAH"} />
        <InputComponent value={amountInUah} handleChange={setAmountInUah} />
      </SelectInputWrapper>
      <SelectInputWrapper>
        <SelectComponent
          name={"Currency"}
          handleChange={setExchangeRates}
          data={currencyData}
          value={exchangeRates}
        />
        <InputComponent value={amountInForeign} disabled />
      </SelectInputWrapper>
    </FlexWrapper>
  );
};

export default Convector;
