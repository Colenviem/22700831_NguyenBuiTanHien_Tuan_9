// src/App.jsx
import React from 'react';
import Cart from './components/Cart';
import { useDispatch } from 'react-redux';
import { addToCart } from './components/CartSlice';
const App = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const data = [
    { id: 1, name: 'MacBook Pro 16 M3 Max 48GB - 1TB', price: 100000, quantity: 1 },
    { id: 2, name: 'MacBook Pro 12 M3 Max 48GB - 1TB', price: 200000, quantity: 1 },
    { id: 3, name: 'MacBook Pro 14 M3 Max 48GB - 1TB', price: 300000, quantity: 1 },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Cửa hàng</h1>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {data.map(item => (
          <li key={item.id} style={{ marginBottom: 10 }}>
            <b>{item.name}</b> - {item.price}₫
            <button onClick={() => handleAddToCart(item)} style={{ marginLeft: 10 }}>
              Thêm vào giỏ hàng
            </button>
          </li>
        ))}
      </ul>
      <Cart />
    </div>
  );
};

export default App;
