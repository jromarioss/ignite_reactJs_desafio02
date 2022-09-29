import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  margin-top: 6.5rem;
  padding-bottom: 10rem;
`;

export const MainHeader = styled.div`
  width: 100vw;
  height: 34rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
`;

export const MainHeaderTitle = styled.div`
  width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const HeaderTitle = styled.div`
  h1 {
    font-size: 3rem;
    color: ${props => props.theme["base-title"]};
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]};
  }
`;

export const MainHeaderImg = styled.div`
  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`;

export const MainCoffeeContainer = styled.main`
  width: 70rem;
  display: flex;
  flex-wrap: wrap;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 2.125rem;
  }
`;

export const MenuCoffees = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;