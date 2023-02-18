import styled from "styled-components";

export const Image = styled.img`
  width: ${({ width }) => width};
`;

export const Link = styled.a`
  cursor: pointer;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
`;
