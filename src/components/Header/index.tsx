import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'

import logoCoffee from '../../assets/logo.svg';
import { CartContext } from '../../contexts/CoffeeContext';
import { HeaderCard, HeaderCardCity, HeaderCardSchop, HeaderContainer } from "./styles";

export function Header() {
  const { amountCart } = useContext(CartContext);
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="" />
      </NavLink>
      <HeaderCard>
        <HeaderCardCity>
          <MapPin size={16} />
          Cerquilho, SP
        </HeaderCardCity>
        
        <NavLink to="/checkinfo">
        <HeaderCardSchop>
          <ShoppingCart size={16} />
            {amountCart >= 1 &&
              <div>{amountCart}</div>
            }
        </HeaderCardSchop>
        </NavLink>
      </HeaderCard>
    </HeaderContainer>
  )
}