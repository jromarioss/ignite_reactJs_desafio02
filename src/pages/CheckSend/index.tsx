import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ImageSend from '../../assets/ImageSend.svg';
import { OrderFormData } from '../CheckInfo';
import { CardDollar, CardMap, CardTimer, SendDivHead, SendDivInfo, SendDivInfoCard, SendImg, SendMain, SendMainDiv } from './styles';

interface LocationProps {
  state: OrderFormData
}

export function CheckSend() {
  const navigate = useNavigate();
  const { state } = useLocation() as unknown as LocationProps;

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  return (
    <SendMain>
      <SendMainDiv>
        <SendDivHead>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </SendDivHead>
        <SendDivInfo>
          <SendDivInfoCard>
            <CardMap>
              <MapPin />
            </CardMap>
            <div>
              <p>Entrega em <span style={{fontWeight: 'bold'}}>Rua {state.rua} {state.numero}</span></p>
              <p>{state.bairro} - {state.cidade}, {state.uf}</p>
            </div>
          </SendDivInfoCard>

          <SendDivInfoCard>
            <CardTimer>
              <Timer />
            </CardTimer>
            <div>
              <p>Previsão de entrega</p>
              <p style={{fontWeight: 'bold'}}>20 min - 30 min</p>
            </div>
          </SendDivInfoCard>

          <SendDivInfoCard>
            <CardDollar>
              <CurrencyDollar />
            </CardDollar>
            <div>
              <p>Pagamento na entrega</p>
              <p style={{fontWeight: 'bold'}}>{state.typeOfPayment}</p>
            </div>
          </SendDivInfoCard>
        </SendDivInfo>
      </SendMainDiv>

      <SendImg>
        <img src={ImageSend} alt="" />
      </SendImg>
    </SendMain>
  )
}