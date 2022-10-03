import styled from "styled-components";

export const OderCards = styled.main`
  width: 100%;
  padding-bottom: 5rem;
`;

export const OrderInput = styled.div`
  width: 40rem;
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const OrderInputForm = styled.div`
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: red;
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }

  input {
    height: 2.625rem;
    padding: 0.75rem;
    border: 1px solid transparent;
    outline: none;
    border-radius: 4px;
    color: ${(props) => props.theme["base-text"]};
    background-color: ${(props) => props.theme["base-input"]};
    font-size: 0.75rem;

    &:hover {
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

export const OrderInputTitle = styled.div`
    h2 {
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    
    span {
      color: ${(props) => props.theme["yellow-dark"]};
      margin-right: 0.5rem;
    }
  }
  
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
    margin-left: 1.875rem;
  }
`;

export const OderInputDiv = styled.div`
  display: flex;
  gap: 10px;

  div p {
    margin-top: 0.5rem;
  }
`;


export const OderInputDivOne = styled.div`
  display: flex;
  gap: 10px;
`;

export const OderPayment = styled.div`
  width: 40rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const PaymentTitle = styled.div`
  h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  h2 span{
    line-height: 1.3;
    color: ${(props) => props.theme.purple};
  }
  
  p {
    padding-left: 1.875rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const TypeOfPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
      color: red;
      font-size: 1rem;
      text-align: center;
    }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  div input {
    display: none;
  }

  div label {
    width: 11.166875rem;
    height: 3.1875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;
    border-radius: 6px;
    border: 1px solid transparent;

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }
  }
  
  div input:checked + label {
    border: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme["purple-light"]};
  }
`;