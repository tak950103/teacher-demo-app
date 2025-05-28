import React from 'react';

export default function DetailPanel({ selectedEvent }) {
  if (!selectedEvent) return <div className="detail-panel">選択された予定はありません。</div>;

  return (
    <div className="detail-panel">
      <dl>
        <dt>タイトル</dt>
        <dd><input readOnly value={selectedEvent.title} /></dd>

        <dt>開始時刻</dt>
        <dd><input readOnly value={selectedEvent.start} /></dd>

        <dt>終了時刻</dt>
        <dd><input readOnly value={selectedEvent.end} /></dd>

        <dt>グループ</dt>
        <dd><input readOnly value={selectedEvent.group} /></dd>

        <dt>メモ</dt>
        <dd className="memo-readonly"><input readOnly value={selectedEvent.memo} /></dd>

        <dt>添付資料</dt>
        <dd><input readOnly value={selectedEvent.attachment} /></dd>

        <dt>作成者</dt>
        <dd><input readOnly value={selectedEvent.author} /></dd>
      </dl>
    </div>
  );
}