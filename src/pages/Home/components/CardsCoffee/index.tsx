import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CoffeeContext";

import { CardsCoffeeCards, CardsCoffeeDiv, CardsCoffeeNumber, CardsCoffeePrice, CardsOfCoffees, CardsTypeCoffees, TypeOfCoffee } from "./styles";

export interface CoffeeTypes {
  id: number;
  types: string[];
  title: string;
  price: number;
  description: string;
  image: any;
}

interface CoffeeProps {
  coffee: CoffeeTypes;
}

export function MenuOfCoffee({ coffee }: CoffeeProps) {
  const { addItemToCart } = useContext(CartContext);
  const [countCoffee, setCountCoffee] = useState(1);

  function handleCountMore() {
    setCountCoffee((state) => {
      return state + 1;
    });
  }

  function handleCountLess() {
    setCountCoffee((state) => {
        return state - 1;
    });
  }

  function handleAddCoffeeToCart() {
    const addCoffee = { ...coffee, countCoffee}

    addItemToCart(addCoffee);
  }

  return (
    <CardsOfCoffees>
      <img src={coffee.image} alt="" />
      <CardsTypeCoffees>
        {coffee.types.map((item) => {
          return (
            <TypeOfCoffee key={item}>{item}</TypeOfCoffee>
            )
        })}
      </CardsTypeCoffees>
     
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <CardsCoffeePrice>
        <p>R$ <span>{coffee.price}</span></p>
        <CardsCoffeeNumber>
          <CardsCoffeeDiv>
            <button disabled={countCoffee <= 1} onClick={handleCountLess}>-</button>
            <p>{countCoffee}</p>
            <button onClick={handleCountMore}>+</button>
          </CardsCoffeeDiv>
          <CardsCoffeeCards onClick={handleAddCoffeeToCart}>
            <ShoppingCart />
          </CardsCoffeeCards>
        </CardsCoffeeNumber>
      </CardsCoffeePrice>
    </CardsOfCoffees>
  );
}