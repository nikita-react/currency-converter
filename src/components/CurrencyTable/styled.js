import styled from "styled-components";

export const Ul = styled.ul`
  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 100px;
  @media (max-width: 480px) {
    margin-bottom: 60px;
  }
  @media (max-height: 568px) {
    margin-bottom: 40px;
  }
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
  @media (max-height: 568px) {
    padding: 5px;
  }
`;

export const Text = styled.p`
  width: 33.33%;
  font-weight: ${({ fontWeight }) => fontWeight};
  @media (max-height: 568px) {
    font-size: 13px;
  }
`;
