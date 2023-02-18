import { FooterStyled, Text, SocialMediaLinksWrapper } from "./styled";
import { Link } from "../../basicStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareInstagram,
  faYoutube,
  faSquareTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterStyled>
      <Text>Copyright © INSART 1993-2023 | All Rights Reserved</Text>
      <SocialMediaLinksWrapper>
        <Link href="https://www.linkedin.com/company/insart" target="_blank">
          <FontAwesomeIcon
            size="2x"
            icon={faLinkedin}
            style={{ color: "#0966c2" }}
          />
        </Link>
        <Link href="https://www.facebook.com/INSART" target="_blank">
          <FontAwesomeIcon
            size="2x"
            icon={faFacebook}
            style={{ color: "#1877f2" }}
          />
        </Link>
        <Link href="https://twitter.com/insart" target="_blank">
          <FontAwesomeIcon
            size="2x"
            icon={faSquareTwitter}
            style={{ color: "#1d9bf0" }}
          />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCBmBMKDweELQCuu29m63ZIg"
          target="_blank"
        >
          <FontAwesomeIcon
            size="2x"
            icon={faYoutube}
            style={{ color: "#ff0100" }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/insart_corporate/?hl=en"
          target="blank_"
        >
          <FontAwesomeIcon
            size="2x"
            icon={faSquareInstagram}
            style={{ color: "#000" }}
          />
        </Link>
      </SocialMediaLinksWrapper>
    </FooterStyled>
  );
};
export default Footer;
