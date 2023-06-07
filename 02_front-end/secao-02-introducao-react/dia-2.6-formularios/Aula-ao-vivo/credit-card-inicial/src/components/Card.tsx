import CreditCard from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { CreditCardData } from "../App";

type CardsProps = {
  data: CreditCardData
}

function Card({ data }: CardsProps) {
  const {cvc, expiry, name, number} = data
  return (
    <CreditCard
      cvc={cvc}
      expiry={expiry}
      name={name}
      number={number}
    />
  );
}

export default Card;
