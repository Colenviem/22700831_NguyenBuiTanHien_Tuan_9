import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../features/ProductSlice';
import { addToCart } from '../features/CartSlice';

const ProductList = () => {
  const products = useSelector((state) => state.product.list);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const data = [
      { id: 1, name: 'Điện thoại realme 12 8GB/512GB' },
      { id: 2, name: 'Điện thoại iPhone 14 Pro Max 128GB' },
      { id: 3, name: 'Điện thoại Samsung Galaxy S24 Ultra 12GB/256GB' },
      { id: 4, name: 'Máy tính bảng iPad Air 5 M1 64GB' },
      { id: 5, name: 'Laptop Dell XPS 13 9315 i5/8GB/512GB SSD' },
      { id: 6, name: 'Tai nghe Bluetooth AirPods Pro 2' },
      { id: 7, name: 'Chuột Logitech MX Master 3S' },
      { id: 8, name: 'Bàn phím cơ Keychron K8 Wireless RGB' },
      { id: 9, name: 'Màn hình LG UltraWide 29 inch 75Hz' },
      { id: 10, name: 'Ổ cứng di động Samsung T7 1TB' },
    ];
    dispatch(setProducts(data));
  }, []);  

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Danh sách sản phẩm</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center bg-gray-100 p-4 rounded hover:shadow">
            <span className="text-lg font-medium text-gray-700">{product.name}</span>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Thêm
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
