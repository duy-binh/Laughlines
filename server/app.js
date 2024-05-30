// Cài đặt các module cần thiết
const express = require('express');
const mysql = require('mysql');

// Tạo một ứng dụng Express
const app = express();

// Cấu hình kết nối cơ sở dữ liệu
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'angular'
});

// Kết nối với cơ sở dữ liệu
connection.connect((err) => {
  if (err) throw err;
  console.log('Kết Nối CSDL Thành Công!');
});

// Định nghĩa một API endpoint
app.get('/', (req, res) => {
  connection.query('SELECT * FROM product', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});
app.get('/sale', (req, res) => {
  connection.query('SELECT * FROM product WHERE priceSale ', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});
// Khởi động server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});