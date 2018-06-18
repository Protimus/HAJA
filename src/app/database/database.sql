CREATE TABLE haja_group (
  group_id SMALLINT NOT NULL AUTO_INCREMENT,
  group_name VARCHAR (40),
  PRIMARY KEY(group_id)
);

CREATE TABLE haja_user (
  user_id SMALLINT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(30) NULL,
  user_mail VARCHAR(40) NULL,
  user_password CHAR(36) NULL,
  PRIMARY KEY(user_id)
);

CREATE TABLE haja_group_score (
  group_id SMALLINT NOT NULL,
  group_competiton_type SMALLINT NOT NULL,
  group_competiton_score DOUBLE NULL,
  PRIMARY KEY(group_id),
  FOREIGN KEY(group_id) REFERENCES haja_group (group_id)
);

CREATE TABLE haja_group_user (
  group_id SMALLINT NOT NULL,
  user_id SMALLINT NOT NULL,
  PRIMARY KEY(group_id, user_id),
  FOREIGN KEY(group_id) REFERENCES haja_group (group_id),
  FOREIGN KEY(user_id) REFERENCES haja_user (user_id)
);