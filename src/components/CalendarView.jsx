import { useState } from 'react';
import './CalendarView.css';

const weekDays = ['日', '月', '火', '水', '木', '金', '土'];

export default function CalendarView({ events,selectedDate, selectedGroups, onDateClick, onEventClick }) {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState(9);

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

  const dateCells = [];
  // ① 空白セルを追加（1日の曜日に応じて）
  for (let i = 0; i < firstDayOfMonth; i++) {
    dateCells.push(<td key={`empty-${i}`}></td>);
  }

  // ② 各日付のセルを生成
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(selectedYear, selectedMonth, d);
    const dayOfWeek = date.getDay();
    const dateStr = `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;

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

  const years = Array.from({ length: 11 }, (_, i) => 2020 + i);
  const months = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="calendar-view">
      <div className="calendar-selectors">
        <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
          {years.map((y) => (
            <option key={y} value={y}>{y}年</option>
          ))}
        </select>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
          {months.map((m) => (
            <option key={m} value={m}>{m + 1}月</option>
          ))}
        </select>
      </div>

      <table>
        <colgroup>
          <col style={{ width: '10%' }} />  {/* 日曜 = 0.75枠相当 */}
          <col style={{ width: '13.33%' }} /> {/* 月曜 */}
          <col style={{ width: '13.33%' }} />
          <col style={{ width: '13.33%' }} />
          <col style={{ width: '13.33%' }} />
          <col style={{ width: '13.33%' }} />
          <col style={{ width: '10%' }} />  {/* 土曜 = 0.75枠相当 */}
        </colgroup>
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