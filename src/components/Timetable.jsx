import './Timetable.css';
import React from 'react';

const days = ['月', '火', '水', '木', '金', '土'];
const dates = ['9月29日', '9月30日', '10月1日', '10月2日', '10月3日', '10月4日'];
const periods = [1, 2, 3, 4, 5, 6];

const sampleEvents = [
  { title: '職員会議', start: '16:00', end: '17:00', group: '全職員', memo: '', attachment: '第〇回職員会議.pdf', author: '田中太郎',  color: 'red' },
  { title: '運動会打合せ', start: '15:00', end: '16:00', group: '3年部', memo: '1組集合', attachment: '運動会要項.pdf', author: '山田花子',  color: 'blue' },
  { title: '研修', start: '16:00', end: '17:00', group: '自分', memo: '〇〇学校', attachment: '研修資料.pdf', author: '鈴木一郎', color: 'white' },
  { title: '学年会議', start: '15:00', end: '16:00', group: '3年部', memo: '', attachment: '学年会議資料.pdf', author: '鈴木一郎', color: 'blue' }
];

export default function Timetable({ onEventClick }) {
    const renderEvent = (event) => (
    <span
      className={`event-label ${event.color}`}
      onClick={() => onEventClick(event)}
    >
      {event.title}
    </span>
  );

  return (
    <div className="timetable">
      <table>
        <colgroup>
          <col style={{ width: '80px' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '15%' }} />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            {days.map((day, i) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
          <tr>
            <th></th>
            {dates.map((date, i) => (
              <th key={date}>{date}</th>
            ))}
          </tr>
          <tr className="announcement-row">
            <th>お知らせ</th>
            {days.map((_, i) => (
              <td key={i} className="announcement-cell">
                {i === 3 && renderEvent(sampleEvents[2])}
                {i === 4 && (
                  <>
                    {renderEvent(sampleEvents[1])} 
                    {renderEvent(sampleEvents[3])} 
                  </>
                )}
                {i === 2 && renderEvent(sampleEvents[0])}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {periods.map((p) => (
            <React.Fragment key={`p${p}`}>
            {/* 上段：科目入力 */}
            <tr>
                <th rowSpan="2">{p}</th>
                {days.map((_, i) => (
                <td key={`p${p}-${i}-subject`} className="subject-cell">
                    <input
                    type="text"
                    defaultValue={
                        (p === 1 && i === 0 && '国語') ||
                        (p === 1 && i === 1 && '算数') ||
                        (p === 1 && i === 2 && '道徳') ||
                        (p === 1 && i === 3 && '国語') ||
                        (p === 1 && i === 4 && '総合') ||
                        (p === 2 && i === 0 && '理科') ||
                        (p === 2 && i === 1 && '算数') ||
                        (p === 2 && i === 2 && '算数') ||
                        (p === 2 && i === 3 && '算数') ||
                        (p === 2 && i === 4 && '国語') ||
                        (p === 3 && i === 0 && '音楽') ||
                        (p === 3 && i === 2 && '国語') ||
                        (p === 3 && i === 3 && '体育') ||
                        (p === 3 && i === 4 && '社会') ||
                        (p === 4 && i === 0 && '理科') ||
                        (p === 4 && i === 1 && '図工') ||
                        (p === 4 && i === 2 && '社会') ||
                        (p === 4 && i === 3 && '総合') ||
                        (p === 4 && i === 4 && '理科') ||
                        (p === 5 && i === 0 && '体育') ||
                        (p === 5 && i === 2 && '理科') ||
                        (p === 5 && i === 3 && '社会') ||
                        (p === 5 && i === 4 && '図工') ||
                        (p === 6 && i === 0 && '社会') ||
                        (p === 6 && i === 1 && '国語') ||
                        (p === 6 && i === 4 && '図工') ||
                        ''
                    }
                    />
                </td>
                ))}
            </tr>

            {/* 下段：メモ入力 */}
            <tr>
                {days.map((_, i) => (
                <td key={`p${p}-${i}-memo`} className="memo-cell">
                    <textarea
                    defaultValue={
                        (p === 1 && i === 0 && '海のいのち') ||
                        (p === 1 && i === 1 && '分数の足し算') ||
                        (p === 1 && i === 3 && '漢字クイズ') ||
                        (p === 2 && i === 0 && '水の変化') ||
                        (p === 2 && i === 1 && '都道府県クイズ') ||
                        (p === 2 && i === 2 && '算数プリント') ||
                        (p === 2 && i === 3 && 'P110⑴～') ||
                        (p === 3 && i === 0 && 'リコーダー') ||
                        (p === 3 && i === 3 && '運動会練習') ||
                        (p === 4 && i === 1 && '水彩画') ||
                        (p === 4 && i === 4 && 'プリント') ||
                        (p === 5 && i === 2 && '実験') ||
                        (p === 5 && i === 3 && 'テスト') ||
                        (p === 6 && i === 1 && '海のいのち') ||
                        (p === 6 && i === 4 && '水彩画') ||
                        ''
                    }
                    />
                </td>
                ))}
            </tr>
            </React.Fragment>
        ))}
          <tr>
            <th>Memo</th>
            {days.map((_, i) => (
              <td key={`memo-${i}`} className="memo-row">
                <textarea
                    defaultValue={
                        i === 0 ? '宿題：漢ド10\n計ド10' : ''
                    }
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}