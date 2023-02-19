import { useEffect, useState } from "react";
import { Ul, Li, Text } from "./styled";
import api from "../../api";

const CurrencyTable = () => {
  const [data, setData] = useState();
  const url =
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

  useEffect(() => {
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.error(error));

    setData([
      { ccy: "EUR", base_ccy: "UAH", buy: "40.90000", sale: "41.90000" },
      { ccy: "USD", base_ccy: "UAH", buy: "39.20000", sale: "39.70000" },
    ]);
  }, []);

  return (
    <Ul>
      <Li background={"#f5f5f5"}>
        <Text fontWeight={"700"}>Currencies</Text>
        <Text fontWeight={"700"}>Buy</Text>
        <Text fontWeight={"700"}>Sell</Text>
      </Li>
      {data &&
        data.map((item) => (
          <Li key={item.ccy} background={"#fff"}>
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
