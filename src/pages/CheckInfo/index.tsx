import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";

import { OrderCoffee } from "./components/OrderCoffee";
import { SelectedCoffee } from "./components/SelectedCoffee";
import { CheckInfoMain } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CoffeeContext";

enum PaymentType {
  credit = 'Cartão de Crédito',
  debit = 'Cartão de Débito',
  money = 'Dinheiro',
}

const OrderFormValidationSchema = zod.object({
  cep: zod.string().min(3, "Informe o CEP."),
  rua: zod.string().min(3, "Informe o nome da rua."),
  numero: zod.string().min(1, "Informe o número."),
  complemento: zod.string().min(3, "Informe o complemento."),
  bairro: zod.string().min(3, "Informe o bairro."),
  cidade: zod.string().min(3, "Informe a cidade."),
  uf: zod.string().min(2, "Informe o estado."),
  typeOfPayment: zod.nativeEnum(PaymentType, {
    errorMap: () => {
      return { message: "Informe o método de pagamento"}
    }
  }),
});

export type OrderFormData = zod.infer<typeof OrderFormValidationSchema>

export function CheckInfo() {
  const { clearCartShopping } = useContext(CartContext);
  const navigate = useNavigate();
  const formValidation = useForm<OrderFormData>({
    resolver: zodResolver(OrderFormValidationSchema),
    defaultValues: {
      typeOfPayment: undefined,
    }
  });

  const { handleSubmit } = formValidation

  function handleConfirmOrder(data: OrderFormData) {
    navigate('/checkconfirmed', { state: data });
    clearCartShopping();
  }

  return (
    <CheckInfoMain>
      <form onSubmit={handleSubmit(handleConfirmOrder)}>
        <div>
          <h2>Complete seu pedido</h2>
          <FormProvider {...formValidation}>
            <OrderCoffee />
          </FormProvider>
        </div>
        
        <div>
          <h2>Cafés selecionado</h2>
          <SelectedCoffee />
        </div>
      </form>
    </CheckInfoMain>
  );
}