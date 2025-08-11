import { useCart } from "../context/CartContext";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Badge, IconButton } from "@mui/material";

function BotonWhatsApp() {
  const { cartCount, cartItems } = useCart();

  const enviarWhatsApp = () => {
    const numero = "573144598004";
    const mensaje = `Hola, quiero comprar estos productos:\n\n${cartItems
      .map((item) => `- ${item.title}`)
      .join("\n")}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`);
  };

  return (
    <IconButton
      onClick={enviarWhatsApp}
      sx={{ position: "fixed", bottom: 80, right: 50, background: "#25D366" }}
    >
      <Badge badgeContent={cartCount} color="error">
        <WhatsAppIcon sx={{ color: "white", fontSize: 30 }} />
      </Badge>
    </IconButton>
  );
}

export default BotonWhatsApp;
