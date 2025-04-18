import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/CartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-100%">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Giỏ hàng</h2>
      <ul className="space-y-4">
        {cart.length === 0 ? (
          <li className="text-center text-gray-500">Giỏ hàng trống</li>
        ) : (
          cart.map(item => (
            <li key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg hover:shadow-md w-[99%]">
              <span className="text-lg font-medium text-gray-700">{item.name}</span>
              <span className="text-sm text-gray-500">Số lượng: {item.quantity}</span>
              <button 
                onClick={() => dispatch(removeFromCart(item.id))} 
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-200"
              >
                Xóa
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
