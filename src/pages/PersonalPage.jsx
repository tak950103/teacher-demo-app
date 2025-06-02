import Layout from '../components/Layout';
import Timetable from '../components/Timetable';
import DetailPanel from '../components/DetailPanel';
import TodoList from '../components/TodoList';
import './PersonalPage.css';
import { useState } from 'react';

export default function PersonalPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <Layout>
      <div className="personal-container">
        <div className="personal-left">
          <Timetable onEventClick={handleEventClick} />
        </div>
        <div className="personal-right-section">
          <div className="personal-box">
            <DetailPanel 
              selectedEvent={selectedEvent}
              editable={false}
            />
          </div>
          <div className="personal-box">
            <TodoList />
          </div>
        </div>
      </div>
    </Layout>
  );
}