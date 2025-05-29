import { useState, useEffect } from 'react';
import './TodoModal.css';
import { FaTimes } from 'react-icons/fa';

export default function TodoModal({ isOpen, onClose, onSave, initialData }) {
  const [text, setText] = useState('');
  const [due, setDue] = useState('');

  useEffect(() => {
    if (initialData) {
      setText(initialData.text || '');
      setDue(initialData.due || '');
    } else {
      setText('');
      setDue('');
    }
  }, [initialData]);

  const handleSave = () => {
    if (!text || !due) return;
    onSave({ text, due, checked: initialData?.checked || false });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>{initialData ? '編集' : '新規追加'}</h3>
          <FaTimes className="modal-close" onClick={onClose} />
        </div>
        <div className="modal-body">
          <label>タイトル</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <label>期限</label>
          <input
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
          />
          <button className="modal-save" onClick={handleSave}>
            追加
          </button>
        </div>
      </div>
    </div>
  );
}