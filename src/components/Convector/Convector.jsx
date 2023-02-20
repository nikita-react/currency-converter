import { useEffect, useState } from "react";
import { SelectInputWrapper, FlexWrapper } from "./styled";
import { Button } from "../../basicStyled";
import SelectComponent from "../SelectComponent";
import InputComponent from "../InputComponent";
import { useSelector } from "react-redux";
import currencies from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Convector = () => {
  const { currencyData } = useSelector((state) => state.currency);
  const [foreignCurrency, setForeignCurrency] = useState(currencies.EUR);
  const [amountInUah, setAmountInUah] = useState(0);
  const [amountInForeign, setAmountInForeign] = useState(0);
  const [switchConvector, setSwitchConvector] = useState(false);

  const getRate = (amountInUah, foreignCurrency) => {
    const exchange = currencyData.find((i) => {
      return i.ccy === foreignCurrency;
    });

    if (!exchange) {
      return;
    }

    let foreign;

    if (switchConvector) {
      foreign = exchange.buy;
      setAmountInUah((foreign * amountInForeign).toFixed(2));
    } else {
      foreign = exchange.sale;
      setAmountInForeign((amountInUah / foreign).toFixed(2));
    }
  };

  useEffect(() => {
    getRate(amountInUah, foreignCurrency);
  }, [amountInUah, foreignCurrency, amountInForeign, switchConvector]);

  return (
    <FlexWrapper direction={switchConvector ? "row-reverse" : "row"}>
      <SelectInputWrapper>
        <SelectComponent name={"Currency"} value={"UAH"} />
        <InputComponent
          value={amountInUah}
          handleChange={setAmountInUah}
          disabled={switchConvector}
        />
      </SelectInputWrapper>
      <Button onClick={() => setSwitchConvector(!switchConvector)}>
        <FontAwesomeIcon size="2x" icon={faArrowRightArrowLeft} />
      </Button>
      <SelectInputWrapper>
        <SelectComponent
          name={"Currency"}
          handleChange={setForeignCurrency}
          data={currencyData}
          value={foreignCurrency}
        />
        <InputComponent
          value={amountInForeign}
          handleChange={setAmountInForeign}
          disabled={switchConvector ? false : true}
        />
      </SelectInputWrapper>
    </FlexWrapper>
  );
};

export default Convector;
