// 필요한 모듈 불러오기
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = 3000;

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// MySQL 연결 확인
db.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    process.exit(1);
  }
  console.log('MySQL 연결 성공!');
});

// 모든 유저 조회 API
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';

  db.query(query, (err, results) => {
    if (err) {
      console.error('쿼리 실행 오류:', err);
      res.status(500).send('서버 오류 발생');
      return;
    }

    res.json(results);
  });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
