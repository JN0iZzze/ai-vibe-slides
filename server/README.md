# Presentation Server

Сервер для интерактивных слайдов с опросом.

## Установка

```bash
npm install
```

## Запуск

### Development режим (с автоперезагрузкой)
```bash
npm run dev
```

### Production режим
```bash
npm start
```

Сервер запустится на порту 3001 (или на порту из переменной окружения `PORT`).

## API

### Socket.io события

**Клиент → Сервер:**
- `join_session` - присоединиться к сессии (room)
- `submit_vote` - отправить голос `{ sessionId, pollId, content }`

**Сервер → Клиент:**
- `new_bubble` - новый ответ появился `{ id, content }`
- `vote_error` - ошибка при отправке голоса

### REST API

- `GET /api/votes/stats?session=<sessionId>&poll=<pollId>` - получить статистику голосов

## База данных

SQLite база данных `votes.db` создаётся автоматически при первом запуске.

Схема таблицы `votes`:
- `id` - INTEGER PRIMARY KEY
- `session_id` - TEXT
- `poll_id` - TEXT
- `content` - TEXT
- `created_at` - DATETIME
