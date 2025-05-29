import './GroupSelector.css';

const groups = [
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

export default function GroupSelector({ selectedGroups, onChange }) {
  const handleToggle = (group) => {
    if (selectedGroups.includes(group)) {
      onChange(selectedGroups.filter((g) => g !== group));
    } else {
      onChange([...selectedGroups, group]);
    }
  };

  return (
    <div className="group-selector">
      <p>グループ</p>
      <ul>
        {groups.map((g) => (
          <li key={g.label} className="group-item">
            <label>
              <input
                type="checkbox"
                checked={selectedGroups.includes(g.label)}
                onChange={() => handleToggle(g.label)}
              />
              <span className={`label-dot ${g.color}`}></span>
              <span className="group-label">{g.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}