import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PersonalPage from './pages/PersonalPage';
import SharedPage from './pages/SharedPage';
import SearchPage from './pages/SearchPage';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>
    </Router>
  );
}

export default App;