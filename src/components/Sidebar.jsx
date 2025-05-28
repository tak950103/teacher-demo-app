import { FaUser, FaShareAlt, FaSearch, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen }) {
  return (
    <aside style={{ ...styles.sidebar, width: isOpen ? '180px' : '60px' }}>
      <nav>
        <ul style={styles.ul}>
          <li><Link to="/personal" style={styles.link}><FaUser /> {isOpen && '個人ページ'}</Link></li>
          <li><Link to="/shared" style={styles.link}><FaShareAlt /> {isOpen && '共有ページ'}</Link></li>
          <li><Link to="/search" style={styles.link}><FaSearch /> {isOpen && '検索'}</Link></li>
          <li><Link to="/settings" style={styles.link}><FaCog /> {isOpen && '設定'}</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    backgroundColor: '#eee',
    padding: '20px 10px',
    height: 'calc(100vh - 60px)',
    boxSizing: 'border-box',
    transition: 'width 0.3s ease',
    overflow: 'hidden'
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#676767',
    textDecoration: 'none'
  }
};