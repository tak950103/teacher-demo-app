import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/personal');
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <label style={styles.label}><FaUser style={styles.icon} /> ログインID</label>
            <input
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label style={styles.label}><FaLock style={styles.icon} /> パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    border: '2px solid black',
    borderRadius: '12px',
    padding: '30px 40px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#676767',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  icon: {
    color: '#676767'
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    marginTop: '10px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#cde0b0',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};