import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.png"
import "../../styles/Header.css";

const Header = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(token && userId);
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      console.log('Header - Cart from localStorage:', cart);
      console.log('Header - Cart count:', cart.length);
      setCartCount(cart.length);
    };
    
    // Initial count
    updateCartCount();
    
    // Listen for custom cart update event
    const handleCartUpdate = (e) => {
      console.log('Header - cartUpdated event received:', e.detail);
      if (e.detail && e.detail.count !== undefined) {
        setCartCount(e.detail.count);
      } else {
        updateCartCount();
      }
    };
    
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setShowLogoutModal(true);
    } else {
      navigate('/login');
    }
  };

  const confirmLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('cart');
    localStorage.removeItem('avatar');
    setIsLoggedIn(false);
    setShowLogoutModal(false);
    window.location.href = '/';
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <img src={logo} alt="BlazeStride Logo" className="logo"/>
        <a href="./">Tomate.</a>
      </div>

      <div className="header-right">
        <ul className="header-links">
          <li><Link to="/profile"></Link></li>
          <li className="orange">
            <a onClick={handleAuthClick} style={{ cursor: 'pointer' }}>
              {isLoggedIn ? 'Log Out' : 'Log In'}
            </a>
          </li>
        </ul>
      </div>

      {showLogoutModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <h3>Are you sure you want to log out?</h3>
            <div className="logout-modal-buttons">
              <button onClick={confirmLogout} className="confirm-btn">Yes</button>
              <button onClick={cancelLogout} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;