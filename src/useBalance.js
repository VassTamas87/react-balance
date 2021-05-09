import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const useBalance = () => {
  const [list, setList] = useState([]);
  const [balance, setBalance] = useState(5000);
  const [currency, setCurrency] = useState([]);

  useEffect(async () => {
    try {
      const resp = await axios.get(
        "https://api.exchangerate.host/latest?base=huf"
      );
      await new Promise((x) => setTimeout(x, 3000));
      setCurrency(resp.data);
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onSubmit = ({ item, price, type }) => {
    const data = {
      id: uuidv4(),
      title: item,
      price: price,
      type: type,
    };
    setList([...list, data]);
  };

  const remove = (el) => {
    if (el.type === "pos") {
      setBalance((balance) => balance + el.price);
    } else setBalance((balance) => balance - el.price);
    setList(list.filter((x) => x.id !== el.id));
  };

  return {
    list,
    balance,
    currency,
    onSubmit,
    remove,
  };
};
export default useBalance;
