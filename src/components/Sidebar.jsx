import './Sidebar.css';
import { FaUser, FaShareAlt, FaSearch, FaCog } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen }) {
  const location = useLocation();

  const menuItems = [
    { path: '/personal', icon: <FaUser />, label: '個人ページ' },
    { path: '/shared', icon: <FaShareAlt />, label: '共有ページ' },
    { path: '/search', icon: <FaSearch />, label: '検索' },
    { path: '/settings', icon: <FaCog />, label: '設定' },
  ];

  return (
    <aside
      className="sidebar"
      style={{ width: isOpen ? '180px' : '60px' }}
    >
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.icon} {isOpen && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}