const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Homepage
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html'); // 构建 index.html 的路径
    res.sendFile(filePath); // 发送 index.html 文件
});

module.exports = router; // 导出路由
