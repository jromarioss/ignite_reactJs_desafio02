import { useContext } from "react"; 

import { ButtonConfirm, SelectCardPrice, SelectCardPriceDiv, SelectCoffee, SelectCoffeMain } from "./styles";

import { CartContext } from "../../../../contexts/CoffeeContext";
import { SelectCard } from "./components/SelectCard";
import { convertMoney } from "../../../../utils/convertMoney";

export function SelectedCoffee() {
  const { cartCoffees, cartCoffeeTotal } = useContext(CartContext);

  return (
    <SelectCoffeMain>
      <SelectCoffee>
        {cartCoffees.map(coffee => {
          return (
            <SelectCard
              key={coffee.id}
              coffee={coffee}
            />
          );
        })}
       
        <SelectCardPrice>
          <SelectCardPriceDiv>
            <p>Total de itens</p>
            <p>R$ {convertMoney(cartCoffeeTotal)}</p>
          </SelectCardPriceDiv>

          <SelectCardPriceDiv>
            <p>Entrega</p>
            <p>R$ 2,50</p>
          </SelectCardPriceDiv>

          <SelectCardPriceDiv>
            <h2>Total</h2>
            <h2>R$ {convertMoney(cartCoffeeTotal + 2.50)}</h2>
          </SelectCardPriceDiv>
        </SelectCardPrice>
        
        <ButtonConfirm type="submit" disabled={cartCoffeeTotal <= 0}>
          CONFIMAR PEDIDO
        </ButtonConfirm>
      </SelectCoffee>
    </SelectCoffeMain>
  )
}