CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    login TEXT UNIQUE NOT NULL,
    money_amount INTEGER NOT NULL,
    card_number TEXT NOT NULL,
    status TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS passwords (
    user_id INTEGER NOT NULL,
    password TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (login, money_amount, card_number, status) VALUES ('admin', 1000, '4532033795436575', 'active');
INSERT INTO users (login, money_amount, card_number, status) VALUES ('user1', 2000, '4024007179995443', 'active');
INSERT INTO users (login, money_amount, card_number, status) VALUES ('user2', 1500, '4532701304662259', 'inactive');
INSERT INTO users (login, money_amount, card_number, status) VALUES ('user3', 3000, '4916889794798976', 'active');
INSERT INTO users (login, money_amount, card_number, status) VALUES ('user4', 1200, '4916449392825299', 'inactive');

INSERT INTO passwords (user_id, password) VALUES (1, 'password123');
INSERT INTO passwords (user_id, password) VALUES (2, 'password456');
INSERT INTO passwords (user_id, password) VALUES (3, 'password789');
INSERT INTO passwords (user_id, password) VALUES (4, 'passwordabc');
INSERT INTO passwords (user_id, password) VALUES (5, 'passworddef');