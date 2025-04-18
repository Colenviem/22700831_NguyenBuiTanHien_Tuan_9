import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { useSelector,useDispatch } from 'react-redux'
import { toggleCart } from './features/CartSlice';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isCartOpen = useSelector((state) => state.cart.isActive);
  const dispatch = useDispatch();

  if (!isLoggedIn) return <Login />;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <div className="p-4 flex justify-end">
        <button
          onClick={() => dispatch(toggleCart())}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          {isCartOpen ? 'Ẩn giỏ hàng' : 'Xem giỏ hàng'}
        </button>
      </div>

      {isCartOpen ? <Cart /> : <ProductList />}

    </div>
  );
}

export default App
