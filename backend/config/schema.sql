-- Run this script in MySQL to set up the database

-- 1. Create the database
CREATE DATABASE IF NOT EXISTS realestate_db;
USE realestate_db;

-- 2. Create the users table
CREATE TABLE IF NOT EXISTS users (
  id          INT           PRIMARY KEY AUTO_INCREMENT,
  name        VARCHAR(100)  NOT NULL,
  email       VARCHAR(150)  NOT NULL UNIQUE,
  password    VARCHAR(255)  NOT NULL,
  role        ENUM('admin', 'buyer', 'seller') NOT NULL DEFAULT 'buyer',
  created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- 3. (Optional) Insert a test admin user
-- Password below is "admin123" hashed with bcrypt
-- INSERT INTO users (name, email, password, role)
-- VALUES ('Admin User', 'admin@realestate.com', '$2a$10$exampleHashHere', 'admin');
