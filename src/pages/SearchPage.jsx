import { useState } from 'react';
import DetailPanel from '../components/DetailPanel';
import Layout from '../components/Layout';
import './SearchPage.css';

const demoEvents = [
  { date: '2025-04-24', group: '3年部', title: '校外学習 打合せ', author: '田中 太郎' },
  { date: '2025-05-01', group: '3年部', title: '校外学習 連絡', author: '田中 太郎' },
  { date: '2025-05-08', group: '3年部', title: '校外学習 役割決め〆切', author: '山田 花子' },
  { date: '2025-05-12', group: '2年部', title: '保護者会準備', author: '佐藤 三郎' },
  { date: '2025-05-15', group: '全職員', title: '職員会議', author: '田中 太郎' },
  { date: '2025-05-20', group: '体育部', title: '運動会準備', author: '山田 花子' },
  { date: '2025-05-22', group: '4年部', title: '見学先決定', author: '木村 次郎' },
  { date: '2025-05-25', group: '研究部', title: '教材研究', author: '鈴木 五郎' },
  { date: '2025-05-28', group: '5年部', title: '資料配布', author: '田中 太郎' },
  { date: '2025-05-30', group: '1年部', title: '遠足連絡', author: '山田 花子' },
  { date: '2025-06-01', group: '3年部', title: '反省会', author: '田中 太郎' },
  { date: '2025-06-03', group: '2年部', title: '発表会準備', author: '木村 二郎' },
];

export default function SearchPage() {
  const [filters, setFilters] = useState({ year: '2025', month: '05', group: '', keyword: '' });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setCurrentPage(1); // フィルター変更時は1ページ目に戻す
  };

  const filtered = demoEvents.filter(ev => {
    return ev.date.startsWith(`${filters.year}-${filters.month}`) &&
      (!filters.group || ev.group === filters.group) &&
      (!filters.keyword || ev.title.includes(filters.keyword));
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Layout>
        <div className="search-container">
        <div style={{ flex: 2 }}>
            <div className="search-filters">
            <select name="year" value={filters.year} onChange={handleFilterChange}>
                <option value="2025">2025年</option>
                <option value="2024">2024年</option>
            </select>
            <select name="month" value={filters.month} onChange={handleFilterChange}>
                {['01','02','03','04','05','06','07','08','09','10','11','12'].map(m => (
                <option key={m} value={m}>{Number(m)}月</option>
                ))}
            </select>
            <select name="group" value={filters.group} onChange={handleFilterChange}>
                <option value="">すべてのグループ</option>
                <option value="全職員">全職員</option>
                <option value="1年部">1年部</option>
                <option value="2年部">2年部</option>
                <option value="3年部">3年部</option>
                <option value="4年部">4年部</option>
                <option value="5年部">5年部</option>
                <option value="体育部">体育部</option>
                <option value="研究部">研究部</option>
            </select>
            <input
                type="text"
                name="keyword"
                value={filters.keyword}
                onChange={handleFilterChange}
                placeholder="キーワード"
            />
            </div>

            <table className="search-table">
            <thead>
                <tr><th>日付</th><th>グループ</th><th>タイトル</th><th>作成者</th></tr>
            </thead>
            <tbody>
                {paginated.map((ev, idx) => (
                <tr key={idx} className={selectedEvent === ev ? 'selected' : ''} onClick={() => setSelectedEvent(ev)}>
                    <td>{ev.date}</td>
                    <td>{ev.group}</td>
                    <td>{ev.title}</td>
                    <td>{ev.author}</td>
                </tr>
                ))}
            </tbody>
            </table>

            <div className="pagination">
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
                前へ
            </button>
            <span>{currentPage} / {totalPages} ページ</span>
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
                次へ
            </button>
            </div>
        </div>

        <div className="detail-panel-wrapper">
            <DetailPanel selectedEvent={selectedEvent} editable={false} />
        </div>
        </div>
    </Layout>
  );
}