import styled from "styled-components";

export const Ul = styled.ul`
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
`;
export const Li = styled.li`
  background: ${({ background }) => (background ? background : "#fff")};
  padding: 15px 8px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  &:first-child {
    padding: 8px;
    background: #f5f5f5;
  }
`;

export const Text = styled.p`
  width: 33.33%;
  font-weight: ${({ fontWeight }) => fontWeight};
`;
