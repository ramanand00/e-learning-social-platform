import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <nav style={{
      padding: '10px',
      backgroundColor: '#333',
      color: '#fff',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000
    }}>
      <ul style={{
        display: 'flex',
        justifyContent: 'space-between',
        listStyleType: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
        <li><Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link></li>
        
        {/* Profile Picture */}
        <li style={{ position: 'relative' }}>
          <img 
            src="https://via.placeholder.com/40" 
            alt="Profile" 
            style={{ borderRadius: '50%', cursor: 'pointer' }}
            onClick={toggleDropdown} 
          />
          {dropdown && (
            <ul style={{
              position: 'absolute',
              right: '0',
              top: '40px',
              backgroundColor: '#fff',
              color: '#333',
              listStyle: 'none',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              zIndex: 100
            }}>
              <li><Link to="/profile" style={{ color: '#333', textDecoration: 'none' }}>Profile</Link></li>
              <li><Link to="/settings" style={{ color: '#333', textDecoration: 'none' }}>Settings</Link></li>
              <li><Link to="/notifications" style={{ color: '#333', textDecoration: 'none' }}>Notifications</Link></li>
              <li><Link to="/logout" style={{ color: '#333', textDecoration: 'none' }}>Logout</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
