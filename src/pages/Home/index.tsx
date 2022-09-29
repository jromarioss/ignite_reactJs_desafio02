import { Products } from '../../data';
import CapaCoffee from '../../assets/Capa_coffee.jpg';

import { MenuOfCoffee } from './components/CardsCoffee';
import { CardsHeader } from './components/CardsHeader';

import { HeaderTitle, MainCoffeeContainer, MainContainer, MainHeader, MainHeaderImg, MainHeaderTitle, MenuCoffees } from "./styles";

export function Home() {
  return (
    <MainContainer>
      <MainHeader>
        <MainHeaderTitle>
          <HeaderTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </HeaderTitle>
          <CardsHeader />
        </MainHeaderTitle>
        
        <MainHeaderImg>
          <img src={CapaCoffee} alt="" />
        </MainHeaderImg>
      </MainHeader>

      <MainCoffeeContainer>
        <h2>Nosso Cafés</h2>
        <MenuCoffees>
          {Products.map((data) => {
            return (
              <MenuOfCoffee
                key={data.id}
                coffee={data}
              />
            );
          })}
        </MenuCoffees>
      </MainCoffeeContainer>
      
    </MainContainer>
  );
}