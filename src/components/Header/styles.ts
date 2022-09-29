import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  background-color: ${props => props.theme.white};
  z-index: 1000;
  top: 0;

  img {
    width: 5.309375rem;
    height: 2.5rem;
  }
`;

export const HeaderCard = styled.header`
  display: flex;
  gap: 0.75rem;
`;

export const HeaderCardCity = styled.header`
  width: 8.9375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]};
  border-radius: 6px;
  
  img {
    color: ${props => props.theme["purple"]};
  }
`;

export const HeaderCardSchop = styled.header`
  width: 2.375rem;
  height: 2.375rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${props => props.theme["yellow-light"]};
  cursor: pointer;

  img {
    color: ${props => props.theme["yellow-dark"]}
  }

  div {
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["yellow-dark"]};
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: bold;
  }

  &:hover {
    color: ${props => props.theme.yellow};
  }
`;