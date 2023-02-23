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

export const Button = styled.button`
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  display: ${({ display }) => display};
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border-radius: 10px;
`;

export const Text = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  display: ${({ display }) => display};
  line-height: ${({ lineHeight }) => lineHeight};
`;
