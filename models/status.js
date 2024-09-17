const express = require('express');
const db = require('../db/db');
const router = express.Router();

// Query user by Status
router.get('/', (req, res) => {
    const { status } = req.query;
    db.get("SELECT * FROM users WHERE status = ?", [status], (err, row) => {
        if (err) {
            res.status(500).send("Server error");
            return;
        }
        if (row) {
            res.send(`
                <h1>User Information</h1>
                <table border="1">
                    <tr>
                        <th>ID</th>
                        <th>Login</th>
                        <th>Money Amount</th>
                        <th>Card Number</th>
                    </tr>
                    <tr>
                        <td>${row.id}</td>
                        <td>${row.login}</td>
                        <td>${row.money_amount}</td>
                        <td>${row.card_number}</td>
                    </tr>
                </table>
                <p><a href="/">Return to homepage</a></p>
            `);
        } else {
            res.status(404).send("User not found");
        }
    });
});

module.exports = router;
