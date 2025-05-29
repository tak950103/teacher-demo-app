import { useState } from 'react';
import { FaPlus, FaPen, FaRegSquare, FaRegCheckSquare, FaEdit } from 'react-icons/fa';
import './TodoList.css';
import TodoModal from './TodoModal';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: '△△連絡', due: '本日', checked: false },
    { text: '〇〇提出', due: '10/4', checked: false },
    { text: '小テスト採点', due: '10/17', checked: false },
    { text: '…', due: '10/31', checked: false }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const handleCheck = (index) => {
    const updated = [...todos];
    updated[index].checked = !updated[index].checked;
    setTodos(updated);
  };

  const handleAdd = () => {
    setEditingTodo(null);
    setIsModalOpen(true);
  };

  const handleEdit = (todo, index) => {
    setEditingTodo({ ...todo, index });
    setIsModalOpen(true);
  };

  const handleSave = (data) => {
    if (editingTodo) {
      const updated = [...todos];
      updated[editingTodo.index] = data;
      setTodos(updated);
    } else {
      setTodos([...todos, data]);
    }
  };

  return (
    <div className="todo-list">
      <div className="todo-header">
        <span className="todo-title">ToDo</span>
        <FaPlus className="todo-add" onClick={handleAdd} />
      </div>
      <ul>
        {todos.map((todo, i) => (
          <li key={i} className="todo-item">
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleCheck(i)}
            />
            <span className={todo.checked ? 'done' : ''}>{todo.text}</span>
            <span className="todo-due">{todo.due === '2025-10-01' ? '本日まで' : `${todo.due}まで`}</span>
            <FaEdit className="todo-edit" onClick={() => handleEdit(todo, i)} />
          </li>
        ))}
      </ul>

      <TodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialData={editingTodo}
      />
    </div>
  );
} 