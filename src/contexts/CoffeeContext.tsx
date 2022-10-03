import produce from 'immer';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { CoffeeTypes } from '../pages/Home/components/CardsCoffee';

export interface CartCoffee extends CoffeeTypes {
  countCoffee: number;
}

interface ItemCartProviderProps {
  children: ReactNode;
}

interface CartContextProps {
  cartCoffees: CartCoffee[];
  amountCart: number;
  cartCoffeeTotal: number;
  typeOfPayment: string;
  addItemToCart: (coffee: CartCoffee) => void;
  deleteCoffee: (coffeeId: number) => void;
  changeAmountOfCoffee: (coffeeId: number, options: 'addCoffee' | 'removeCoffee') => void;
  clearCartShopping: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: ItemCartProviderProps) {
  const [cartCoffees, setCartCoffees] = useState<CartCoffee[]>(() => {
    const storedCartCoffees = localStorage.getItem('@coffeeDelivery-ignite:cartOfCoffee');

    if (storedCartCoffees) {
      return JSON.parse(storedCartCoffees);
    }
    return []
  });
  
  const amountCart = cartCoffees.length;
  const [typeOfPayment, setTypeOfPayment] = useState<string>('');

  const cartCoffeeTotal = cartCoffees.reduce((total, cartCoffee) => {
    return total + cartCoffee.price * cartCoffee.countCoffee;
  }, 0)

  function addItemToCart(coffee: CartCoffee) {
    const coffeeAlreadyExistOnTheCart = cartCoffees.findIndex(cartCoffee => {
      cartCoffee.id === coffee.id
    });

    const newCartCoffee = produce(cartCoffees, draft => {
      if (coffeeAlreadyExistOnTheCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistOnTheCart].countCoffee += coffee.countCoffee;
      }
    });

    setCartCoffees(newCartCoffee);
  }

  function changeAmountOfCoffee(coffeeId: number, options: 'addCoffee' | 'removeCoffee') {
    const newCartCoffee = produce(cartCoffees, draft => {
      const hasThisCoffeeOnCart = cartCoffees.findIndex(cartCoffee => {
       return cartCoffee.id === coffeeId;
      });

      if (hasThisCoffeeOnCart >= 0) {
        const item = draft[hasThisCoffeeOnCart];
        
        draft[hasThisCoffeeOnCart].countCoffee = options === 'addCoffee' ? item.countCoffee + 1 : item.countCoffee - 1;
      }
    });

    setCartCoffees(newCartCoffee);
  }

  function deleteCoffee(coffeeId: number) {
    const coffeeToDelete = cartCoffees.filter(cartCoffee => {
      return cartCoffee.id !== coffeeId;
    });

    setCartCoffees(coffeeToDelete);
  }

  function clearCartShopping() {
    setCartCoffees([]);
  }

  useEffect(() => {
    localStorage.setItem('@coffeeDelivery-ignite:cartOfCoffee', JSON.stringify(cartCoffees));
  }, [cartCoffees]);

  return (
    <CartContext.Provider 
      value={{
        cartCoffees,
        amountCart,
        cartCoffeeTotal,
        typeOfPayment,
        addItemToCart,
        deleteCoffee,
        changeAmountOfCoffee,
        clearCartShopping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}