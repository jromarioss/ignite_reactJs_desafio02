import styled from "styled-components";

export const SelectCoffeMain = styled.div`
  width: 28rem;
  height: auto;
  padding-block: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const SelectCoffee = styled.div`
  width: 23rem;
`;


export const SelectCardPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const SelectCardPriceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonConfirm = styled.button`
  width: 100%;
  height: 2.875rem;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;