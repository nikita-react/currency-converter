import styled from "styled-components";

export const MainStyled = styled.main`
  flex-grow: 1;
  padding: 60px 20px;
  background: rgba(0, 0, 0, 0.02);
  @media (max-width: 480px) {
    padding: 40px 20px;
  }
  @media (max-height: 568px) {
    padding: 20px;
  }
`;
