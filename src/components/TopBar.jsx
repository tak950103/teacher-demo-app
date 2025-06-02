import './TopBar.css';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function TopBar({ toggleSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button onClick={toggleSidebar} className="topbar-menu-button">
          <FaBars />
        </button>
        <div className="topbar-title">教員支援システム</div>
      </div>
      <div className="topbar-right">
        <button className="topbar-logout" onClick={handleLogout}>ログアウト</button>
      </div>
    </header>
  );
}