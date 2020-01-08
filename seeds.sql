INSERT INTO users (name, password) VALUES ('Deion', 'password1');
SELECT @last := LAST_INSERT_ID();
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Deion','Instagram', 'fbPass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Christian','Facebook', 'instaPass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Claudia','Twitter', 'fbPgfcfass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Amiel','Amazon', 'amazonPass!', @last);