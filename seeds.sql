INSERT INTO users (name, password) VALUES ('Deion', 'password1');
SELECT @last := LAST_INSERT_ID();
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Deion','Facebook', 'fbPass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Christian','Insta', 'instaPass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Claudia','Facebook', 'fbPgfcfass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Amiel','LinkedIn', 'linkedPass!', @last);