import { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  FolderTree,
  Tag,
  ShoppingBag,
  Users,
  Shield,
  Image,
  FileText,
  MapPin,
  Settings,
  FileCode,
  HelpCircle,
  FileQuestion,
  Lock,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const Sidebar = ({ activeMenu, setActiveMenu, isCollapsed }) => {
  const [expandedMenus, setExpandedMenus] = useState({
    dashboard: false,
    ecommerce: false,
    category: false,
    attributes: false,
    order: false,
    user: true,
    roles: false,
    gallery: false,
    report: false,
    location: false,
    pages: false,
  });

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = [
    {
      section: 'MAIN HOME',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, hasSubmenu: true },
      ],
    },
    {
      section: 'ALL PAGE',
      items: [
        { id: 'ecommerce', label: 'Ecommerce', icon: ShoppingCart, hasSubmenu: true },
        { id: 'category', label: 'Category', icon: FolderTree, hasSubmenu: true },
        { id: 'attributes', label: 'Attributes', icon: Tag, hasSubmenu: true },
        { id: 'order', label: 'Order', icon: ShoppingBag, hasSubmenu: true },
        {
          id: 'user', label: 'User', icon: Users, hasSubmenu: true, submenu: [
            { id: 'all-user', label: 'All User' },
            { id: 'add-new-user', label: 'Add New User', active: true },
            { id: 'login', label: 'Login' },
            { id: 'sign-up', label: 'Sign Up' },
          ]
        },
        { id: 'roles', label: 'Roles', icon: Shield, hasSubmenu: true },
        { id: 'gallery', label: 'Gallery', icon: Image, hasSubmenu: false },
        { id: 'report', label: 'Report', icon: FileText, hasSubmenu: false },
      ],
    },
    {
      section: 'SETTING',
      items: [
        { id: 'location', label: 'Location', icon: MapPin, hasSubmenu: true },
        { id: 'setting', label: 'Setting', icon: Settings, hasSubmenu: false },
        { id: 'pages', label: 'Pages', icon: FileCode, hasSubmenu: true },
      ],
    },
    {
      section: 'COMPONENTS',
      items: [
        { id: 'components', label: 'Components', icon: FileCode, hasSubmenu: false },
      ],
    },
    {
      section: 'SUPPORT',
      items: [
        { id: 'help-center', label: 'Help Center', icon: HelpCircle, hasSubmenu: false },
        { id: 'faqs', label: 'FAQs', icon: FileQuestion, hasSubmenu: false },
        { id: 'privacy-policy', label: 'Privacy Policy', icon: Lock, hasSubmenu: false },
      ],
    },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-content">
        {menuItems.map((section, idx) => (
          <div key={idx} className="menu-section">
            {!isCollapsed && <div className="section-title">{section.section}</div>}
            {section.items.map((item) => (
              <div key={item.id} className="menu-item-wrapper">
                <button
                  onClick={() => {
                    if (item.hasSubmenu) {
                      toggleMenu(item.id);
                    } else {
                      setActiveMenu(item.id);
                    }
                  }}
                  className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
                >
                  <item.icon size={20} />
                  {!isCollapsed && (
                    <>
                      <span className="menu-label">{item.label}</span>
                      {item.hasSubmenu && (
                        <ChevronDown
                          size={16}
                          className={`chevron ${expandedMenus[item.id] ? 'expanded' : ''}`}
                        />
                      )}
                    </>
                  )}
                </button>
                {!isCollapsed && item.hasSubmenu && expandedMenus[item.id] && item.submenu && (
                  <div className="submenu">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => setActiveMenu(subItem.id)}
                        className={`submenu-item ${subItem.active ? 'active' : ''}`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
        {!isCollapsed && (
          <div className="sidebar-footer">
            <div className="connect-section">
              <div className="connect-title">CONNECT US</div>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="help-card">
              <div className="help-avatar">👋</div>
              <div className="help-title">Hi, how can we help?</div>
              <div className="help-description">Contact us if you have any assistance, we will contact you as soon as possible</div>
              <button className="help-btn">Contact</button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
