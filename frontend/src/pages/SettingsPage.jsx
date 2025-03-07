import React, { useState, useEffect } from 'react';

const SettingsPage = () => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.removeItem('theme');
    }
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div>
      <h1>Settings</h1>
      <label>
        Select Theme:
        <select value={theme} onChange={handleThemeChange}>
          <option value="system">System Default</option>
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
      </label>
    </div>
  );
};

export default SettingsPage;
