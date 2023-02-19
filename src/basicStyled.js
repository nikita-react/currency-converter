import styled from "styled-components";

export const Image = styled.img`
  width: ${({ width }) => width};
`;

export const Link = styled.a`
  cursor: pointer;
  color: ${({ color }) => (color ? color : "rgb(24, 119, 242)")};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
`;
