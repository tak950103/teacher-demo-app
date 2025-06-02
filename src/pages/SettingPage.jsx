import { useState } from 'react';
import TimetableCell from '../components/TimetableCell';
import SubjectManager from '../components/SubjectManager';
import './SettingPage.css';
import Layout from '../components/Layout';

const days = ['月', '火', '水', '木', '金'];
const periods = [1, 2, 3, 4, 5, 6];

export default function SettingPage() {
  const [subjects, setSubjects] = useState(['国語', '算数', '理科', '社会', '外国語', '体育', '音楽', '図工']);
  const [timetable, setTimetable] = useState(
    Array(periods.length).fill().map(() => Array(days.length).fill(''))
  );

  const handleCellChange = (row, col, value) => {
    const newTable = [...timetable];
    newTable[row][col] = value;
    setTimetable(newTable);
  };

  const handleAddSubject = (newSubj) => {
    if (!subjects.includes(newSubj)) {
      setSubjects([...subjects, newSubj]);
    }
  };

  const handleDeleteSubject = (target) => {
    setSubjects(subjects.filter((s) => s !== target));
  };

  return (
    <Layout>
        <div className="setting-page">
        <div className="setting-timetable-container">
            <h3>基本時間割設定</h3>
            <table className="setting-timetable">
            <thead>
                <tr>
                <th></th>
                {days.map(day => <th key={day}>{day}</th>)}
                </tr>
            </thead>
            <tbody>
                {periods.map((p, row) => (
                <tr key={row}>
                    <td>{p}</td>
                    {days.map((_, col) => (
                    <TimetableCell
                        key={col}
                        subjects={subjects}
                        value={timetable[row][col]}
                        onChange={(val) => handleCellChange(row, col, val)}
                    />
                    ))}
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        <SubjectManager
            subjects={subjects}
            onAdd={handleAddSubject}
            onDelete={handleDeleteSubject}
            onEdit={(oldName) => {
            const newName = prompt('新しい名前', oldName);
            if (newName && newName !== oldName) {
                setSubjects(subjects.map(s => s === oldName ? newName : s));
                setTimetable(timetable.map(row => row.map(cell => cell === oldName ? newName : cell)));
            }
            }}
        />
        </div>
    </Layout>
  );
}