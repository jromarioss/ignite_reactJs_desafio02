import styled from "styled-components";

export const SendMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.375rem;
  margin-top: 6.5rem;
  padding-top: 2.5rem;
`;

export const SendMainDiv = styled.main`
  width: 32.875rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SendDivHead = styled.div`
  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    color: ${(props) => props.theme.yellow};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const SendDivInfo = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background-color: ${(props) => props.theme.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;

export const SendDivInfoCard = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const CardMap = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.purple};
`;

export const CardTimer = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
`;

export const CardDollar = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme["yellow-dark"]};
`;

export const SendImg = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  img{ 
    margin-top: 7rem;
  }
`;