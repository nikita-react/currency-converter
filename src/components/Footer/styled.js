import styled from "styled-components";

export const FooterStyled = styled.footer`
  min-height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Text = styled.p`
  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const SocialMediaLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
