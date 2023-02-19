import { useEffect, useState } from "react";
import { Ul, Li, Text } from "./styled";
import api from "../../api";

const CurrencyTable = () => {
  const [currentExchangeRates, setCurrentExchangeRates] = useState([]);

  useEffect(() => {
    api.getExchangeRates().then((res) => {
      setCurrentExchangeRates(res);
    });
  }, []);

  return (
    <Ul>
      <Li>
        <Text fontWeight={"700"}>Currencies</Text>
        <Text fontWeight={"700"}>Buy</Text>
        <Text fontWeight={"700"}>Sell</Text>
      </Li>
      {currentExchangeRates &&
        currentExchangeRates.map((item) => (
          <Li key={item.ccy}>
            <Text fontWeight={"500"}>
              {item.ccy}/{item.base_ccy}
            </Text>
            <Text>{item.buy}</Text>
            <Text>{item.sale}</Text>
          </Li>
        ))}
    </Ul>
  );
};
export default CurrencyTable;
