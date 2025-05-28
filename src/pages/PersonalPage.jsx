import Layout from '../components/Layout';
import Timetable from '../components/Timetable';
import DetailPanel from '../components/DetailPanel';
import { useState } from 'react';

export default function PersonalPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <Layout>
      <div style={styles.container}>
        <div style={styles.left}>
          <Timetable onEventClick={handleEventClick} />
        </div>
        <div style={{ flex: 1 }}>
            <DetailPanel selectedEvent={selectedEvent} />
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    height: '100%'
  },
  left: {
    flex: 2,
    overflow: 'auto'
  },
  right: {
    flex: 1,
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    height: 'fit-content'
  },
  detailBox: {
    fontSize: '14px',
    color: '#333'
  }
};