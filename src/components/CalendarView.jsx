import './CalendarView.css';

const weekDays = ['日', '月', '火', '水', '木', '金', '土'];

export default function CalendarView({ events,selectedDate, selectedGroups, onDateClick, onEventClick }) {
  const year = 2025;
  const month = 9; // 10月（0-indexed）

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const dateCells = [];
  // ① 空白セルを追加（1日の曜日に応じて）
  for (let i = 0; i < firstDayOfMonth; i++) {
    dateCells.push(<td key={`empty-${i}`}></td>);
  }

  // ② 各日付のセルを生成
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    const dayOfWeek = date.getDay();
    const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;

    const dailyEvents = events.filter(
      (ev) =>
        ev.date === dateStr &&
        (ev.group === '自分' || selectedGroups.includes(ev.group))
    );

    dateCells.push(
      <td
        key={d}
        className={`calendar-cell ${dayOfWeek === 0 || dayOfWeek === 6 ? 'narrow' : ''} ${
          selectedDate === dateStr ? 'selected' : ''
        }`}
        onClick={() => onDateClick(dateStr)}
      >
        <div className="date-label-wrapper">
            <span className="date-label">{d}</span>
        </div>
        {dailyEvents.slice(0, 2).map((ev, i) => (
            <div
            key={i}
            className={`event-label ${ev.color}`}
            onClick={(e) => {
                e.stopPropagation();
                onEventClick(ev);
            }}
            >
            {ev.title}
            </div>
        ))}
        </td>
    );
  }

  const rows = [];
  let index = 0;
  while (index < dateCells.length) {
    rows.push(
      <tr key={index}>
        {Array(7)
          .fill(null)
          .map((_, i) => dateCells[index + i] || <td key={i}></td>)}
      </tr>
    );
    index += 7;
  }

  return (
    <div className="calendar-view">
      <table>
        <thead>
          <tr>
            {weekDays.map((day) => (
              <th key={day} className={day === '日' || day === '土' ? 'narrow' : ''}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}