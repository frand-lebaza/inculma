import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Badge, Drawer, IconButton, List, ListItem, ListItemText, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function CarritoDrawer() {
  const { cartItems, removeFromCart, cartCount } = useCart();
  const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = (state) => setOpen(state);

  const enviarWhatsApp = () => {
    const numero = "573103468623";
    const mensaje = `Hola, quiero comprar estos productos:\n\n${cartItems
      .map((item) => `- ${item.title}`)
      .join("\n")}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`);
  };
  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <IconButton scrolled={scrolled} onClick={() => toggleDrawer(true)} sx={{ color: `${({ scrolled }) => (scrolled ? "black" : "white")};`, mr: 2, }}>
        <Badge badgeContent={cartCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <div style={{ width: 300, padding: 20 }}>
          <h2>Tu Carrito</h2>
          <List>
            {cartItems.map((item, index) => (
              <ListItem key={index} secondaryAction={
                <IconButton edge="end" onClick={() => removeFromCart(index)}>
                  <DeleteIcon />
                </IconButton>
              }>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>

          {cartItems.length > 0 && (
            <Button
              variant="contained"              
              fullWidth
              onClick={enviarWhatsApp}
             sx={{
              backgroundColor: "#25D366", 
              "&:hover": {
                backgroundColor: "#1e8a46ff", 
              },
              mt: 2,
            }} 
            >
              <WhatsAppIcon style={{ fontSize: "28px" }} />
              Finalizar compra por WhatsApp
            </Button>
          )}
        </div>
      </Drawer>
    </>
  );
}
