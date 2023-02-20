import styled from "styled-components";

export const FooterStyled = styled.footer`
  min-height: 100px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Text = styled.p`
  @media (max-width: 480px) {
    text-align: center;
    max-width: 260px;
  }
`;

export const SocialMediaLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Line = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`;
