import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CartContext } from "../../../../contexts/CoffeeContext";

import { CardsOptions, OderCards, OderInputDiv, OderInputDivOne, OderPayment, OrderInput, OrderInputForm, OrderInputTitle, PaymentTitle, TypeOfPayment } from "./styles";

interface ErrorType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export function OrderCoffee() {
  const { buttonCredit, buttonDebit, buttonMoney } = useContext(CartContext);
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as ErrorType;

  return (
    <OderCards>
      <OrderInput>
        <OrderInputTitle>
          <h2>
            <span><MapPinLine /></span>
            Endereço de Entrega
          </h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </OrderInputTitle>

        <OrderInputForm>
          <div>
            <input placeholder="CEP" {...register('cep')} />
            <p>{errors.cep?.message}</p>
          </div>
          <div>
            <input placeholder="Rua" {...register('rua')} />
            <p>{errors.rua?.message}</p>
          </div>

          <OderInputDiv>
            <div>
              <input placeholder="Número" {...register('numero')} />
              <p>{errors.numero?.message}</p>
            </div>
            <div>
              <input placeholder="Complemento Opcional" {...register('complemento')}  />
              <p>{errors.complemento?.message}</p>
            </div>
          </OderInputDiv>

          <OderInputDivOne>
            <div>
              <input  placeholder="Bairro" {...register('bairro')} />
              <p>{errors.bairro?.message}</p>
            </div>
            <div>
              <input placeholder="Cidade" {...register('cidade')} />
              <p>{errors.cidade?.message}</p>
            </div>
            <div>
              <input  placeholder="UF" {...register('uf')} />
              <p>{errors.uf?.message}</p>
            </div>
          </OderInputDivOne>
        </OrderInputForm>
      </OrderInput>

      <OderPayment>
        <PaymentTitle>
          <h2><span><CurrencyDollar /></span> Pagamento</h2>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </PaymentTitle>

        <TypeOfPayment>
          <CardsOptions type="button" onClick={buttonCredit}>
            <span><CreditCard size={14} /></span> CARTÃO DE CRÉDITO
          </CardsOptions>

          <CardsOptions type="button" onClick={buttonDebit}>
            <span><Bank size={14} /></span> CARTÃO DE DÉBITO
          </CardsOptions>

          <CardsOptions type="button" onClick={buttonMoney}>
            <span><Money size={14} /></span> DINHEIRO
          </CardsOptions>
        </TypeOfPayment>
      </OderPayment>
    </OderCards>
  );
}