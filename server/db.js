import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(join(__dirname, 'votes.db'));

// Создание таблицы votes
db.exec(`
  CREATE TABLE IF NOT EXISTS votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL,
    poll_id TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Индексы для быстрого поиска
db.exec(`
  CREATE INDEX IF NOT EXISTS idx_session_poll ON votes(session_id, poll_id);
  CREATE INDEX IF NOT EXISTS idx_created_at ON votes(created_at);
`);

/**
 * Сохранить голос в БД
 */
export function insertVote(sessionId, pollId, content) {
  const stmt = db.prepare(`
    INSERT INTO votes (session_id, poll_id, content)
    VALUES (?, ?, ?)
  `);
  const result = stmt.run(sessionId, pollId, content);
  return result.lastInsertRowid;
}

/**
 * Получить статистику по голосам (группировка по уникальным ответам)
 */
export function getVoteStats(sessionId, pollId) {
  const stmt = db.prepare(`
    SELECT content, COUNT(*) as count
    FROM votes
    WHERE session_id = ? AND poll_id = ?
    GROUP BY content
    ORDER BY count DESC
  `);
  const rows = stmt.all(sessionId, pollId);
  
  const stats = {};
  for (const row of rows) {
    stats[row.content] = row.count;
  }
  return stats;
}

/**
 * Получить все голоса для сессии и опроса
 */
export function getAllVotes(sessionId, pollId) {
  const stmt = db.prepare(`
    SELECT id, content, created_at
    FROM votes
    WHERE session_id = ? AND poll_id = ?
    ORDER BY created_at ASC
  `);
  return stmt.all(sessionId, pollId);
}

export default db;
