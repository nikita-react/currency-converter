import styled from "styled-components";

export const HeaderStyled = styled.header`
  min-height: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
  @media (max-height: 568px) {
    min-height: fit-content;
    gap: 5px;
    padding: 10px 20px;
  }
`;
