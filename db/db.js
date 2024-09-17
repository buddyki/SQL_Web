const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Connect to SQLite database
const db = new sqlite3.Database(':memory:');

// Initialize database
fs.readFile(path.join(__dirname, '../init-db.sql'), 'utf8', (err, data) => { 
    if (err) {
        console.error('Unable to read SQL file:', err);
        return;
    }

    db.serialize(() => {
        db.exec(data, (error) => {
            if (error) {
                console.error('Error executing SQL file:', error);
            } else {
                console.log('Database initialized successfully');
            }
        });
    });
});

module.exports = db;
