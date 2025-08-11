import React, { useState } from "react";

function Shop() {
  const [cart, setCart] = useState([]);

  const productos = [
    { id: 1, nombre: "Silla de madera", precio: 150000 },
    { id: 2, nombre: "Mesa de comedor", precio: 450000 },
    { id: 3, nombre: "Sofá 3 puestos", precio: 800000 }
  ];

  const agregarAlCarrito = (producto) => {
    setCart([...cart, producto]);
  };

  const finalizarCompra = () => {
    if (cart.length === 0) {
      alert("No hay productos en el carrito.");
      return;
    }

    const mensaje = `Hola, me gustaría comprar los siguientes productos:\n\n${cart
      .map((p) => `- ${p.nombre} (COP ${p.precio.toLocaleString()})`)
      .join("\n")}`;

    const url = `https://wa.me/573103468623?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <h1>Tienda</h1>
      {productos.map((p) => (
        <div key={p.id}>
          <span>{p.nombre} - ${p.precio.toLocaleString()}</span>
          <button onClick={() => agregarAlCarrito(p)}>Agregar</button>
        </div>
      ))}

      <button onClick={finalizarCompra}>Finalizar compra</button>
    </div>
  );
}

export default Shop;
