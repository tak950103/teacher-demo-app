import React, { useState, useEffect } from 'react';
import './DetailPanel.css';

const groups = [
  { label: '自分', color: 'gray' },
  { label: '全職員', color: 'red' },
  { label: '1年部', color: 'orange' },
  { label: '2年部', color: 'green' },
  { label: '3年部', color: 'blue' },
  { label: '4年部', color: 'purple' },
  { label: '5年部', color: 'pink' },
  { label: '体育部', color: 'yellow' },
  { label: '生徒指導部', color: 'teal'},
  { label: '研究部', color: 'brown' }
];

export default function DetailPanel({ selectedEvent, editable = false, onSave }) {
  const isNew = !selectedEvent;
  const [isEditMode, setIsEditMode] = useState(false);
  const [form, setForm] = useState({
    title: '',
    start: '',
    end: '',
    group: '',
    memo: '',
    attachment: '',
    author: ''
  });

    useEffect(() => {
    if (selectedEvent) {
      setForm(selectedEvent);
      setIsEditMode(editable);
    } else {
      setForm({
        title: '',
        start: '',
        end: '',
        group: '',
        memo: '',
        attachment: '',
        author: ''
      });
      setIsEditMode(editable);
    }
  }, [selectedEvent, editable]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (onSave) {
      const selectedGroup = groups.find(g => g.label === form.group);
      const updatedForm = {
      ...form,
      color: selectedGroup?.color || 'gray'  // fallback
    };
      onSave(updatedForm);
    }
    setIsEditMode(false);
  };

  if (!selectedEvent) return <div className="detail-panel">選択された予定はありません。</div>;

  return (
    <div className="detail-panel">
      <div style={{ textAlign: 'right' }}>
        {!isNew && editable && (
          <button onClick={() => setIsEditMode(!isEditMode)}>
            {isEditMode ? 'キャンセル' : '編集'}
          </button>
        )}
        {isEditMode && editable && (
          <button onClick={handleSave} style={{ marginLeft: 8 }}>
            保存
          </button>
        )}
      </div>
      <dl>
        <dt>タイトル</dt>
        <dd>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            readOnly={!isEditMode}
          />
        </dd>

        <dt>開始時刻</dt>
        <dd>
          <input
            name="start"
            value={form.start}
            onChange={handleChange}
            readOnly={!isEditMode}
          />
        </dd>

        <dt>終了時刻</dt>
        <dd>
          <input
            name="end"
            value={form.end}
            onChange={handleChange}
            readOnly={!isEditMode}
          />
        </dd>

        <dt>グループ</dt>
        <dd className="group-select">
        {isEditMode ? (
            <select
            name="group"
            value={form.group}
            onChange={handleChange}
            >
            <option value="">-- 選択してください --</option>
            {groups.map((g) => (
                <option key={g.label} value={g.label}>{g.label}</option>
            ))}
            </select>
        ) : (
            <input
            name="group"
            value={form.group}
            readOnly
            />
        )}
        </dd>

        <dt>メモ</dt>
        <dd className="memo-readonly">
          <input
            name="memo"
            value={form.memo}
            onChange={handleChange}
            readOnly={!isEditMode}
          />
        </dd>

        <dt>添付資料</dt>
        <dd>
          <input
            name="attachment"
            value={form.attachment}
            onChange={handleChange}
            readOnly={!isEditMode}
          />
        </dd>

        <dt>作成者</dt>
        <dd>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            readOnly={!isEditMode}
          />
        </dd>
      </dl>
    </div>
  );
}