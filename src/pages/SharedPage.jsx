import Layout from '../components/Layout';
import CalendarView from '../components/CalendarView';
import GroupSelector from '../components/GroupSelector';
import EventList from '../components/EventList';
import DetailPanel from '../components/DetailPanel';
import TodoModal from '../components/TodoModal'; // 既存の再利用
import { useState } from 'react';



export default function SharedPage() {
  const [events, setEvents] = useState([
    { title: '職員会議', date: '2025-10-01', start: '16:00', end: '17:00', group: '全職員', attachment: '第〇回職員会議.pdf', author: '田中太郎', color: 'red' },
    { title: '運動会打合せ', date: '2025-10-03', start: '15:30', end: '16:00', group: '3年部', author: '山田花子', color: 'blue' },
    { title: '研修', date: '2025-10-02', start: '13:00', end: '17:00', group: '自分', author: '山田花子', color: 'white' },
    { title: '学年会議', date: '2025-10-03', start: '16:00', end: '17:00', group: '3年部', author: '田中太郎', color: 'blue' },
    { title: '職員会議', date: '2025-10-08', start: '16:00', end: '17:00', group: '全職員', attachment: '第〇回職員会議.pdf', author: '田中太郎', color: 'red' },
    { title: '職員会議', date: '2025-10-15', start: '16:00', end: '17:00', group: '全職員', attachment: '第〇回職員会議.pdf', author: '田中太郎', color: 'red' },
    { title: '職員会議', date: '2025-10-29', start: '16:00', end: '17:00', group: '全職員', attachment: '第〇回職員会議.pdf', author: '田中太郎', color: 'red' },
    { title: '学年会議', date: '2025-10-06', start: '16:00', end: '17:00', group: '1年部', author: '鈴木一郎', color: 'orange' },
    { title: '打合せ', date: '2025-10-06', start: '15:00', end: '16:00', group: '2年部', author: '木村二郎', color: 'green' },
    { title: '〇〇提出', date: '2025-10-13', group: '自分', author: '山田花子', color: 'white' },
    { title: '〇〇連絡', date: '2025-10-23', group: '自分', author: '山田花子', color: 'white' },
    { title: '全校朝礼', date: '2025-10-08', group: '全職員', author: '田中太郎', color: 'red' },
    { title: '△△持ち帰り', date: '2025-10-17', group: '1年部', author: '鈴木一郎', color: 'orange' },
    { title: '□□提出', date: '2025-10-24', group: '1年部', author: '鈴木一郎', color: 'orange' },
    { title: '××締め切り', date: '2025-10-21', group: '2年部', author: '木村二郎', color: 'green' },
    { title: '校外学習', date: '2025-10-23', group: '2年部', author: '木村二郎', color: 'green' },
    { title: '運動会打合せ', date: '2025-10-10', start: '15:30', end: '17:00', group: '体育部', author: '山田花子', color: 'yellow' },
    { title: '〇〇締切', date: '2025-10-15', group: '体育部', author: '山田花子', color: 'yellow' },
    { title: '資料作成', date: '2025-10-20', group: '体育部', author: '山田花子', color: 'yellow' },
    { title: '社会見学', date: '2025-10-03', start: '09:00', end: '15:00', group: '4年部', author: '木下優子', color: 'purple' },
  ]);
  const [selectedDate, setSelectedDate] = useState('2025-10-01');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedGroups, setSelectedGroups] = useState(['全職員', '3年部', '体育部']);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateClick = (dateStr) => {
    setSelectedDate(dateStr);
    setSelectedEvent(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleAddNew = () => {
    setSelectedEvent(null); // ← ここでイベントをリセット
    setTimeout(() => {
        setSelectedEvent({  // ダミーの新規用オブジェクトでもOK
        title: '',
        date: selectedDate,
        start: '',
        end: '',
        group: '',
        memo: '',
        attachment: '',
        author: ''
        });
    }, 0); // setStateが同期されないことへの対策
    };

  const handleSaveEvent = (updatedEvent) => {
    // 既存イベントを更新（新規 or 既存）
    setEvents(prevEvents => {
        const index = prevEvents.findIndex(ev =>
        ev.date === updatedEvent.date && ev.title === selectedEvent?.title
        );

        if (index !== -1) {
        // 編集 → 該当イベントを置き換える
        const newEvents = [...prevEvents];
        newEvents[index] = updatedEvent;
        return newEvents;
        } else {
        // 新規作成 → 末尾に追加
        return [...prevEvents, updatedEvent];
        }
    });

    setSelectedEvent(updatedEvent); // 表示も更新
    };

  //  選択中の日付＋グループに一致するイベントだけ抽出
  const filteredEvents = events.filter(
  (ev) =>
    ev.date === selectedDate &&
    (ev.group === '自分' || selectedGroups.includes(ev.group))
);

  return (
    <Layout>
      <div style={styles.container}>
        <div style={styles.left}>
          <div style={styles.upper}>
            <CalendarView
                events={events}
                selectedDate={selectedDate}
                selectedGroups={selectedGroups}
                onDateClick={handleDateClick}
                onEventClick={handleEventClick}
            />
          </div>
          <div style={styles.bottomRow}>
            <GroupSelector
              selectedGroups={selectedGroups}
              onChange={setSelectedGroups}
            />
            <EventList
              events={filteredEvents}
              selectedDate={selectedDate}
              onEventClick={handleEventClick}
              onAdd={handleAddNew}
            />
          </div>
        </div>
        <div style={styles.right}>
          <DetailPanel
            selectedEvent={selectedEvent}
            editable={true}
            onSave={handleSaveEvent}
          />
        </div>

        <TodoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveEvent}
          initialData={null}
        />
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    height: 'calc(100vh - 40px)',
    padding: '20px'
  },
  left: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    overflow: 'auto'
  },
  right: {
    flex: 1.5,
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    height: 'fit-content'
  },
  bottomRow: {
    display: 'flex',
    gap: '20px'
  }
};