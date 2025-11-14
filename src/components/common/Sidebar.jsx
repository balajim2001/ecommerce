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
    <aside className={`sidebar bg-(--bg-secondary)! border-r border-(--border-color)! flex flex-col fixed left-0 top-0 bottom-0 overflow-y-auto z-100 transition-width duration-300 ease ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex-1 overflow-y-auto px-4">
        {menuItems.map((section, idx) => (
          <div key={idx} className="mb-6">
            {!isCollapsed && <div className="max-lg:hidden text-xs font-semibold text-(--text-muted)! mb-2 uppercase tracking-[0.5px] py-5">{section.section}</div>}
            {section.items.map((item) => (
              <div key={item.id} className="mb-1">
                <button
                  onClick={() => {
                    if (item.hasSubmenu) {
                      toggleMenu(item.id);
                    } else {
                      setActiveMenu(item.id);
                    }
                  }}
                  className={`max-lg:hidden w-full flex items-center gap-3 py-2 px-3 bg-transparent border-none text-(--text-secondary) text-xs cursor-pointer transition-all duration-200 text-left relative hover:bg-(--bg-tertiary) hover:text-(--text-primary) ${activeMenu === item.id ? 'bg-(--bg-tertiary) text-(--accent-blue) relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-(--accent-blue)' : ''}`}
                >
                  <item.icon size={20} />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1 whitespace-nowrap overflow-none text-ellipsis">{item.label}</span>
                      {item.hasSubmenu && (
                        <ChevronDown
                          size={16}
                          className={`transition-all duration-200 shrink-0 max-lg:hidden ${expandedMenus[item.id] ? 'rotate-180' : ''}`}
                        />
                      )}
                    </>
                  )}
                </button>
                {!isCollapsed && item.hasSubmenu && expandedMenus[item.id] && item.submenu && (
                  <div className="pl-14 mt-1 max-lg:hidden">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => setActiveMenu(subItem.id)}
                        className={`w-full block text-sm py-5 px-2 bg-transparent border-none text-(--text-secondary) cursor-pointer transition-all duration-200 text-left rounded-md mb-1 hover:bg-(--bg-tertiary) hover:text-(--text-primary) ${subItem.active ? 'bg-(--bg-tertiary) text-(--accent-blue)' : ''}`}
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
          <div className="px-6 py-5 border-t border-(--border-color)! shrink-0">
            <div className="mb-6">
              <div className="text-xs font-semibold text-(--text-muted) uppercase tracking-[0.5px] mb-3">CONNECT US</div>
              <div className="flex gap-3 justify-start">
                <a href="#" className="flex items-center justify-center w-10 h-10 bg-(--bg-tertiary) rounded-lg text-(--text-secondary) transition-all duration-200 hover:bg-(--border-color) hover:text-(--accent-blue)">
                  <Facebook size={20} />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 bg-(--bg-tertiary) rounded-lg text-(--text-secondary) transition-all duration-200 hover:bg-(--border-color) hover:text-(--accent-blue)">
                  <Twitter size={20} />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 bg-(--bg-tertiary) rounded-lg text-(--text-secondary) transition-all duration-200 hover:bg-(--border-color) hover:text-(--accent-blue)">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 bg-(--bg-tertiary) rounded-lg text-(--text-secondary) transition-all duration-200 hover:bg-(--border-color) hover:text-(--accent-blue)">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="bg-[linear-gradient(135deg,var(--bg-tertiary)_0%,rgba(59,130,246,0.05)_100%)] border border-(--border-color)! rounded-xl p-4 text-center">
              <div className="text-3xl mb-3">👋</div>
              <div className="font-semibold text-(--text-primary) mb-2">Hi, how can we help?</div>
              <div className="text-xs text-(--text-secondary) mb-3">Contact us if you have any assistance, we will contact you as soon as possible</div>
              <button className="w-full px-3 py-4 bg-(--accent-blue) text-white text-sm rounded-lg border-none font-semibold cursor-pointer transition-all duration-200 hover:bg-(--accent-blue-hover)">Contact</button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
