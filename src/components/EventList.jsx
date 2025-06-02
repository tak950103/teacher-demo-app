import './EventList.css';
import { FaPlus } from 'react-icons/fa';

export default function EventList({ events, selectedDate, onEventClick, onAdd }) {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { month: 'numeric', day: 'numeric', weekday: 'short' };
    return date.toLocaleDateString('ja-JP', options)
      .replace('年', '年 ')
      .replace('月', '月 ')
      .replace('日', '日')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const sharedEvents = events.filter(ev => ev.group !== '自分');
  const personalEvents = events.filter(ev => ev.group === '自分');

  if (!events || events.length === 0) {
    return (
        <div className="event-list no-events">
            <div className="no-events-text"><strong>{formatDate(selectedDate)}</strong>の予定はありません。</div>
            <button className="add-schedule-button" onClick={onAdd}
              style={{ marginLeft: "3px" }}
            >
            新規作成
            </button>
        </div>
    );
  }

  return (
    <div className="event-list three-columns">
      {/* 1列目: 日付 */}
      <div className="event-date-column">
        <div className="event-list-header">
          <strong>{formatDate(selectedDate)}</strong>
        </div>
        <button className="add-schedule-button" onClick={onAdd}
          style={{
            marginTop: "6px",
          }}
        >
            新規作成
        </button>
      </div>

      {/* 2列目: グループの予定 */}
      <div className="event-section shared">
        <div className="section-header" style={{ gridColumn: 'span 2' }}>
            <div className="section-subtitle">（グループ予定）</div>
            <hr />
        </div>
        {sharedEvents.map((event, index) => (
            <span
            key={index}
            className={`event-label ${event.color}`}
            onClick={() => onEventClick(event)}
            >
            {event.title}
            </span>
        ))}
        </div>

      {/* 3列目: 自分の予定 */}
      <div className="event-section">
        <div className="section-subtitle">（自分の予定）</div>
        <hr />
        <ul>
          {personalEvents.map((event, index) => (
            <li key={index}>
              <span
                className={`event-label ${event.color}`}
                onClick={() => onEventClick(event)}
              >
                {event.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

}