import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PersonalPage from './pages/PersonalPage';
import SharedPage from './pages/SharedPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/shared" element={<SharedPage />} />
      </Routes>
    </Router>
  );
}

export default App;