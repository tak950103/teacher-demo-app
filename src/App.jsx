import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PersonalPage from './pages/PersonalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/personal" element={<PersonalPage />} />
      </Routes>
    </Router>
  );
}

export default App;