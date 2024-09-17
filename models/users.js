const express = require('express');
const db = require('../db/db');
const router = express.Router();

// Get active users
router.get('/', (req, res) => {
    db.all("SELECT id, login FROM users WHERE status = 'active'", [], (err, rows) => {
        if (err) {
            res.status(500).send("Server error");
            return;
        }
        const usersList = rows.map(user => `<li>${user.id}: ${user.login}</li>`).join('');
        res.send(`<h1>Active User List</h1><ul>${usersList}</ul>`);
    });
});

module.exports = router;
