import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { CardsCar, CardsCoffee, CardsPack, CardsTime, HeaderCard, HeaderCards } from "./styles";

export function CardsHeader() {
  return (
    <HeaderCard>
      <HeaderCards>
        <CardsCar>
          <ShoppingCart />
        </CardsCar>
        <p>Compra simples e segura</p>
      </HeaderCards>

      <HeaderCards>
        <CardsTime>
          <Timer />
        </CardsTime>
        <p>Entrega rápida e rastreada</p>
      </HeaderCards>

      <HeaderCards>
        <CardsPack>
          <Package />
        </CardsPack>
        <p>Embalagem mantém o café intacto</p>
      </HeaderCards>

      <HeaderCards>
        <CardsCoffee>
          <Coffee />
        </CardsCoffee>
        <p>O café chega fresquinho até você</p>
      </HeaderCards>
    </HeaderCard>
  )
}