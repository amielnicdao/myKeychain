INSERT INTO users (name, password) VALUES ('Deion', 'password1');
SELECT @last := LAST_INSERT_ID();
INSERT INTO passwords (type, password, user_id) VALUES ('Facebook', 'fbPass!', @last);
INSERT INTO passwords (type, password, user_id) VALUES ('Insta', 'instaPass!', @last);
INSERT INTO passwords (type, password, user_id) VALUES ('Facebook', 'fbPgfcfass!', @last);
INSERT INTO passwords (type, password, user_id) VALUES ('LinkedIn', 'linkedPass!', @last);