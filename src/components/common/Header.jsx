import { useState } from 'react';
import { Search, Menu, Sun, Moon, Bell, MessageSquare, Settings, Grid } from 'lucide-react';
import { useTheme } from '../../utils/hook';

const Header = ({ onToggleSidebar }) => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-(--header-height) flex items-center justify-between py-6 max-sm:py-4 sticky top-0 z-50 bg-(--bg-secondary) border-b border-(--border-color)">
      <div className="flex-1 max-w-lg flex items-center gap-3">
        <button className="bg-transparent border-none text-(--text-secondary) cursor-pointer p-2 rounded-md flex items-center justify-center transition-all duration-200 mr-2 hover:bg-(--bg-tertiary) hover:text-(--text-primary)" onClick={onToggleSidebar}>
          <Menu size={20} />
        </button>
        <div className="relative w-full max-sm:max-w-[200px]">
          <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-(--text-muted)" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-3 pl-10 rounded-md bg-(--bg-primary) border border-(--border-color) text-(--text-primary) text-sm outline-none transition-all duration-200 placeholder-(--text-muted) focus:border-(--accent-blue) focus:bg-(--bg-secondary) focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            className="header-icon-btn text-xl"
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
          >
            <span className="flex items-center justify-center">🇬🇧</span>
          </button>
          {showLanguageMenu && (
            <div className="absolute right-0 top-full mt-1 bg-(--bg-secondary) border border-(--border-color) rounded-md z-200 min-w-[120px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
              <button className="w-full flex items-center gap-2 py-2 px-4 bg-transparent border-none text-(--text-secondary) cursor-pointer text-xs font-medium transition-all duration-200 hover:bg-(--bg-tertiary) hover:text-(--text-primary) text-left first:rounded-t-md last:rounded-b-md">
                <span className="flex items-center justify-center">🇬🇧</span>
                <span>ENG</span>
              </button>
              <button className="w-full flex items-center gap-2 py-2 px-4 bg-transparent border-none text-(--text-secondary) cursor-pointer text-xs font-medium transition-all duration-200 hover:bg-(--bg-tertiary) hover:text-(--text-primary) text-left first:rounded-t-md last:rounded-b-md">
                <span className="flex items-center justify-center">🇻🇳</span>
                <span>VIE</span>
              </button>
            </div>
          )}
        </div>

        <button className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-(--text-secondary) cursor-pointer rounded-lg transition-all duration-200 relative hover:bg-(--bg-tertiary) hover:text-(--text-primary) max-sm:w-9 max-sm:h-9" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-(--text-secondary) cursor-pointer rounded-lg transition-all duration-200 relative hover:bg-(--bg-tertiary) hover:text-(--text-primary) max-sm:w-9 max-sm:h-9">
          <Bell size={20} />
          <span className="absolute top-1 right-1 bg-[#ef4444] text-white text-[10px] font-semibold px-1 rounded-[10px] min-w-4 text-center">4</span>
        </button>

        <button className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-(--text-secondary) cursor-pointer rounded-lg transition-all duration-200 relative hover:bg-(--bg-tertiary) hover:text-(--text-primary) max-sm:w-9 max-sm:h-9">
          <MessageSquare size={20} />
          <span className="absolute top-1 right-1 bg-[#ef4444] text-white text-[10px] font-semibold px-1 rounded-[10px] min-w-4 text-center">5</span>
        </button>

        <button className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-(--text-secondary) cursor-pointer rounded-lg transition-all duration-200 relative hover:bg-(--bg-tertiary) hover:text-(--text-primary) max-sm:w-9 max-sm:h-9">
          <Settings size={20} />
        </button>

        <button className="w-10 h-10 flex items-center justify-center bg-transparent border-none text-(--text-secondary) cursor-pointer rounded-lg transition-all duration-200 relative hover:bg-(--bg-tertiary) hover:text-(--text-primary) max-sm:w-9 max-sm:h-9">
          <Grid size={20} />
        </button>

        <div className="flex items-center gap-3 px-2 py-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-(--bg-tertiary) ml-2">
          <div className="w-10 h-10 rounded-full bg-[linear-gradient(135deg,#667eea,#764ba2)]! flex items-center justify-center text-white font-semibold text-sm shrink-0">
            <span>KW</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="text-sm font-semibold text-(--text-primary)">Kristin Watson</div>
            <div className="text-xs text-(--text-muted)">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
