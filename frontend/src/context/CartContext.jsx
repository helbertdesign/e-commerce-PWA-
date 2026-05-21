import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(p => p.id === producto.id);
      if (existe) {
        return prev.map(p => p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p);
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminar = (id) => {
    setCarrito(prev => prev.filter(p => p.id !== id));
  };

  const modificarCantidad = (id, cantidad) => {
    if (cantidad <= 0) {
      eliminar(id);
      return;
    }
    setCarrito(prev => prev.map(p => p.id === id ? { ...p, cantidad } : p));
  };

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <CartContext.Provider value={{ carrito, agregar, eliminar, modificarCantidad, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); 