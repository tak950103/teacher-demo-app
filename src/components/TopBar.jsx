import { FaBars } from 'react-icons/fa';

export default function TopBar({ toggleSidebar }) {
  return (
    <header style={styles.header}>
      <button onClick={toggleSidebar} style={styles.menuButton}><FaBars /></button>
      <div style={styles.right}>
        <button style={styles.logout}>ログアウト</button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#a6cf9e',
    color: '#fff',
    height: '60px',
    width: '100vw',
    boxSizing: 'border-box'
  },
  menuButton: {
    fontSize: '20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    marginRight: '10px'
  },
  left: {
    fontWeight: 'bold',
    fontSize: '18px'
  },
  right: {},
  logout: {
    backgroundColor: '#f08080',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};