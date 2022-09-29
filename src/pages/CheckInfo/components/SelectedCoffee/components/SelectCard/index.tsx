import { Trash } from "phosphor-react";
import { useContext } from "react";

import { CartCoffee, CartContext } from "../../../../../../contexts/CoffeeContext";
import { convertMoney } from "../../../../../../utils/convertMoney";
import { SelectCardCoffee, SelectCoffeeType, SelectCoffeeTypeButton, SelectCoffeeTypeDiv } from "./styles";

export interface CoffeeProps {
  coffee: CartCoffee;
}

export function SelectCard({ coffee }: CoffeeProps) {
  const { changeAmountOfCoffee, deleteCoffee } = useContext(CartContext);

  const priceTotal = coffee.price * coffee.countCoffee;
  const convertPrice = convertMoney(priceTotal);

  function handleCountMore() {
    changeAmountOfCoffee(coffee.id, 'addCoffee');
  }
  
  function handleCountLess() {
    changeAmountOfCoffee(coffee.id, 'removeCoffee');
  }

  function handleDeleteCoffee() {
    deleteCoffee(coffee.id);
  }

  return (
    <SelectCardCoffee>
      <img src={coffee.image} alt="" width={64} />
      <SelectCoffeeType>
        <p>{coffee.title}</p>
        <SelectCoffeeTypeDiv>
          <SelectCoffeeTypeButton>
            <button disabled={coffee.countCoffee <= 1} type="button" onClick={handleCountLess}>-</button>
            <p>{coffee.countCoffee}</p>
            <button type="button" onClick={handleCountMore}>+</button>
          </SelectCoffeeTypeButton>
          <button onClick={handleDeleteCoffee}>
            <span><Trash width={16} /></span>
            REMOVER
          </button>
        </SelectCoffeeTypeDiv>
      </SelectCoffeeType>
      <p>R$ {convertPrice}</p>
    </SelectCardCoffee>
  );
}