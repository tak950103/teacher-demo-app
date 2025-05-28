import { useState } from 'react';
import TopBar from './TopBar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <TopBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        <Sidebar isOpen={sidebarOpen} />
        <main style={{ flex: 1, padding: '20px', background: '#f9f9f9', overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
}