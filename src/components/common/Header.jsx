import { useState } from 'react';
import { Search, Menu, Sun, Moon, Bell, MessageSquare, Settings, Grid } from 'lucide-react';

const Header = ({ onToggleSidebar }) => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return (
    <header className="header">
      <div className="header-left">
        <button className="sidebar-toggle-btn" onClick={onToggleSidebar}>
          <Menu size={20} />
        </button>
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search here..."
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <div className="language-dropdown">
          <button
            className="header-icon-btn language-btn"
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
          >
            <span className="flag-icon">🇬🇧</span>
          </button>
          {showLanguageMenu && (
            <div className="language-menu">
              <button className="language-item">
                <span className="flag-icon">🇬🇧</span>
                <span>ENG</span>
              </button>
              <button className="language-item">
                <span className="flag-icon">🇻🇳</span>
                <span>VIE</span>
              </button>
            </div>
          )}
        </div>

        <button className="header-icon-btn" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="header-icon-btn notification-btn">
          <Bell size={20} />
          <span className="notification-badge">4</span>
        </button>

        <button className="header-icon-btn notification-btn">
          <MessageSquare size={20} />
          <span className="notification-badge">5</span>
        </button>

        <button className="header-icon-btn">
          <Settings size={20} />
        </button>

        <button className="header-icon-btn">
          <Grid size={20} />
        </button>

        <div className="user-profile">
          <div className="user-avatar">
            <span>KW</span>
          </div>
          <div className="user-info">
            <div className="user-name">Kristin Watson</div>
            <div className="user-role">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
