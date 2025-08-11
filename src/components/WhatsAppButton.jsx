import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

export default function SocialFloatingButtons() {
  return (
    <Container>
      {/* WhatsApp visible siempre */}
      <Button
        href="https://wa.link/52ku57"
        target="_blank"
        rel="noopener noreferrer"
        bg="#25D366"
      >
        <WhatsAppIcon style={{ fontSize: "28px" }} />
      </Button>

      {/* Facebook */}
      <SocialButton
        className="social"
        href="https://www.facebook.com/share/1GnTDPxLAK/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        bg="#3b5998"
      >
        <FaFacebookF style={{ fontSize: "26px" }} />
      </SocialButton>

      {/* Instagram */}
      <SocialButton
        className="social"
        href="https://www.instagram.com/mueblesinculma?igsh=a2x5ZWx0NDkxaGRl&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        bg="#E1306C"
      >
        <InstagramIcon style={{ fontSize: "26px" }} />
      </SocialButton>

      {/* TikTok */}
      <SocialButton
        className="social"
        href="https://www.tiktok.com/@muebles.inculma?_t=ZS-8ylWbVKnvs2&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        bg="#000000"
      >
        <FaTiktok style={{ fontSize: "26px" }} />
      </SocialButton>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  z-index: 999;
  
  &:hover .social {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const Button = styled.a`
  background-color: ${({ bg }) => bg || "#25D366"};
  color: white;
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 26px;

  &:hover {
    transform: scale(1.1);
    filter: brightness(1.1);
  }
`;

const SocialButton = styled(Button)`
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
`;
