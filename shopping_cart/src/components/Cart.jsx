// src/components/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h2>🛒 Giỏ hàng</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} style={{ marginBottom: 10 }}>
            <b>{item.name}</b> - {item.price}₫ x 
            <input 
              type="number" 
              min="1"
              value={item.quantity}
              onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
              style={{ width: 50, margin: '0 10px', height: 30, textAlign: 'center' }}
            />
            = <b>{item.price * item.quantity}₫</b>
            <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: 10 }}>Xoá</button>
          </li>
        ))}
      </ul>

      <hr />
      <p><b>Tổng số lượng:</b> {totalQuantity}</p>
      <p><b>Tổng tiền:</b> {totalPrice}₫</p>
    </div>
  );
};

export default Cart;
