import styled from "styled-components";

export const SelectCardCoffee = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  p {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const SelectCoffeeType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SelectCoffeeTypeDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  
  button {
    width: 5.6875rem;
    border: 0;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    background-color: ${(props) => props.theme["base-button"]};
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    cursor: pointer;

    span {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }
  }
`;

export const SelectCoffeeTypeButton = styled.div`
  width: 4.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};

  button {
    width: 0.875rem;
    height: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme.purple};
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }
`;