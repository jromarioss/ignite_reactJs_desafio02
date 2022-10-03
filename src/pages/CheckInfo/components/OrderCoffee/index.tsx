import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";

import { OderCards, OderInputDiv, OderInputDivOne, OderPayment, OrderInput, OrderInputForm, OrderInputTitle, PaymentTitle, TypeOfPayment } from "./styles";

interface ErrorType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export function OrderCoffee() {
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
          <div>
            <input type="radio" id="credit" {...register('typeOfPayment')} value="Cartão de Crédito" />
            <label htmlFor="credit">
              <span><CreditCard size={16} color="#8047F8" /></span> CARTÃO DE CRÉDITO
            </label>

            <input type="radio" id="debit" {...register('typeOfPayment')} value="Cartão de Débito" />
            <label htmlFor="debit">
              <span><Bank size={16} color="#8047F8" /></span> CARTÃO DE DÉBITO
            </label>
          
            <input type="radio" id="money" {...register('typeOfPayment')} value="Dinheiro" />
            <label htmlFor="money">
              <span><Money size={16} color="#8047F8" /></span> DINHEIRO
            </label>
          </div>

          <p>{errors.typeOfPayment?.message}</p>
        </TypeOfPayment>
      </OderPayment>
    </OderCards>
  );
}