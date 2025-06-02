import Layout from '../components/Layout';
import Timetable from '../components/Timetable';
import DetailPanel from '../components/DetailPanel';
import TodoList from '../components/TodoList';
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
        <div style={styles.rightSection}>
          <div style={styles.detailBox}>
            <DetailPanel 
              selectedEvent={selectedEvent}
              editable={false}
            />
          </div>
          <div style={styles.todoBox}>
            <TodoList />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    height: '100%',
    padding: '20px'
  },
  left: {
    flex: 2.4,
    overflow: 'auto'
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    height: '100%'
  },
  detailBox: {
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    height: 'fit-content'
  },
  todoBox: {
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    height: 'fit-content'
  }
};