import { Ul, Li, Text } from "./styled";
import { useSelector } from "react-redux";

const CurrencyTable = () => {
  const { currencyData, loading } = useSelector((state) => state.currency);
  return (
    <Ul>
      <Li>
        <Text fontWeight={"700"}>Currencies</Text>
        <Text fontWeight={"700"}>Buy</Text>
        <Text fontWeight={"700"}>Sell</Text>
      </Li>
      {loading ? (
        <Li>
          <Text>Loading...</Text>
        </Li>
      ) : (
        currencyData &&
        currencyData.map((item) => (
          <Li key={item.ccy}>
            <Text fontWeight={"500"}>
              {item.ccy}/{item.base_ccy}
            </Text>
            <Text>{item.buy}</Text>
            <Text>{item.sale}</Text>
          </Li>
        ))
      )}
    </Ul>
  );
};
export default CurrencyTable;
