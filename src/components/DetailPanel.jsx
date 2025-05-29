import React, { useState, useEffect } from 'react';
import './DetailPanel.css';

export default function DetailPanel({ selectedEvent, editable = false, onSave }) {
  const isNew = !selectedEvent;
  const [isEditMode, setIsEditMode] = useState(isNew || editable);
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
      setIsEditMode(true);
    }
  }, [selectedEvent, editable]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (onSave) {
      onSave(form);
    }
    setIsEditMode(false);
  };

  if (!selectedEvent) return <div className="detail-panel">選択された予定はありません。</div>;

  return (
    <div className="detail-panel">
      <div style={{ textAlign: 'right', marginBottom: 8 }}>
        {!isNew && (
          <button onClick={() => setIsEditMode(!isEditMode)}>
            {isEditMode ? 'キャンセル' : '編集'}
          </button>
        )}
        {isEditMode && (
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
        <dd>
          <input
            name="group"
            value={form.group}
            onChange={handleChange}
            readOnly={!isEditMode}
          />
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