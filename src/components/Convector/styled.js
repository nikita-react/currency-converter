import styled from "styled-components";

export const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
`;
