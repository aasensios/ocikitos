DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS breeds;
DROP TABLE IF EXISTS colors;

CREATE TABLE roles
(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) UNIQUE,
    description VARCHAR(100)
);
CREATE TABLE breeds
(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE
);
CREATE TABLE colors
(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE
);

-- INSERT INTO roles (id, name, permissions) VALUES
-- (0, 'admin', 'all'),
-- (1, 'vet', 'dogs'),
-- (2, 'bio', 'samples'),
-- (3, 'agent', 'incidents'),
-- (4, 'officer', 'infractions');

INSERT INTO breeds (name) VALUES
('Border Coliie'),
('Husky'),
('German Shepherd'),
('St. Bernard'),
('Basset hound');


INSERT INTO colors (name) VALUES
('white'),
('black'),
('brown'),
('lightbrown'),
('grey'),
('lightgrey');