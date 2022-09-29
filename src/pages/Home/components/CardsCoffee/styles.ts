import styled from "styled-components";

export const CardsOfCoffees = styled.div`
  width: 16rem;
  height: 19.375rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding-top: 7rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    top: -25px;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme["base-subtitle"]};
  }

  p {
    margin-bottom: 2.0625rem;
    padding-inline: 1.25rem;
    text-align: center;
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
  }
`;

export const CardsTypeCoffees = styled.div`
  display: flex;
  gap: 0.3124rem;
`;

export const TypeOfCoffee = styled.div`
  padding: 4px 8px;
  margin-bottom: 1rem;
  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
  font-size: 0.625rem;
  font-weight: bold;
  border-radius: 50px;
`;

export const CardsCoffeePrice = styled.div`
  padding-inline: 1.5rem;
  display: flex;
  gap: 1.4375rem;

  p {
    padding: 0;
    font-size: 0.875rem;
    color: ${props => props.theme["base-text"]};

    span {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

export const CardsCoffeeNumber = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CardsCoffeeDiv = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  border-radius: 6px;
  background-color: ${props => props.theme["base-button"]};

  button {
    border: 0;
    background-color: transparent;
    color: ${props => props.theme["purple-dark"]};
    cursor: pointer;
  }

  p {
    margin-bottom: 0;
    font-size: 1rem;
  }
`;

export const CardsCoffeeCards = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${props => props.theme["purple-dark"]};
  color: ${props => props.theme.white};

  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.purple};
  }
`;