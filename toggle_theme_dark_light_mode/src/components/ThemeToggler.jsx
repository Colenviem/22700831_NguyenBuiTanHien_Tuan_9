import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './ThemeSlice'

const ThemeToggler = () => {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleTheme());
      };
    
      return (
        <div className={`app-container ${theme}`}>
          <h2>🌓 Giao diện hiện tại: {theme === 'light' ? '🌞 Sáng' : '🌙 Tối'}</h2>
          <button onClick={toggle}>
            Chuyển sang {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
    );
}

export default ThemeToggler
