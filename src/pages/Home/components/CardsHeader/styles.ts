import styled from "styled-components";

export const HeaderCard = styled.div`
  width: 35.4375rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

export const HeaderCards = styled.div`
  width: 14.4375rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  p {
    color: ${props => props.theme["base-text"]};
  }
`;

export const CardsCar = styled.div`
background-color: ${props => props.theme["yellow-dark"]};
color: ${props => props.theme.background};
`;

export const CardsPack = styled.div`
background-color: ${props => props.theme["base-text"]};
color: ${props => props.theme.background};
`;

export const CardsCoffee = styled.div`
background-color: ${props => props.theme.purple};
color: ${props => props.theme.background};
`;

export const CardsTime = styled.div`
background-color: ${props => props.theme.yellow};
color: ${props => props.theme.background};
`;