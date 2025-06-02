import React, { useState } from 'react';
import './SubjectManager.css';
import { FaTrashAlt, FaPen } from 'react-icons/fa';

export default function SubjectManager({ subjects, onAdd, onEdit, onDelete }) {
  const [newSubject, setNewSubject] = useState('');

  return (
    <div className="subject-manager">
      <h3>クラス・科目</h3>
      <ul className="subject-list">
        {subjects.map((subj, idx) => (
          <li key={idx} className="subject-item">
            <div className="subject-name">{subj}</div>
            <div className="subject-actions">
              <FaPen style={{ color: "#1a73e8"}} onClick={() => onEdit(subj)} />
              <FaTrashAlt style={{ color: "#e57373"}} onClick={() => onDelete(subj)} />
            </div>
          </li>
        ))}
      </ul>
      <div className="subject-input-row">
        <input
          type="text"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          placeholder="新規科目を入力"
        />
        <button
          onClick={() => {
            if (newSubject.trim()) {
              onAdd(newSubject.trim());
              setNewSubject('');
            }
          }}
        >
          追加
        </button>
      </div>
    </div>
  );
}