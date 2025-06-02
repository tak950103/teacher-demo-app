import React, { useState } from 'react';
import './TimetableCell.css';

export default function TimetableCell({ subjects, value, onChange }) {
  return (
    <td className="timetable-cell">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">--</option>
        {subjects.map((s, idx) => (
          <option key={idx} value={s}>{s}</option>
        ))}
      </select>
    </td>
  );
}