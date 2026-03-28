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

CREATE TABLE IF NOT EXISTS properties (
  id          INT           PRIMARY KEY AUTO_INCREMENT,
  title       VARCHAR(200)  NOT NULL,
  description TEXT,
  price       DECIMAL(12,2) NOT NULL,
  location    VARCHAR(200)  NOT NULL,
  type        VARCHAR(100)  NOT NULL,
  status      ENUM('available','sold','rented') NOT NULL DEFAULT 'available',
  image_url   VARCHAR(500),
  seller_id   INT           NOT NULL,
  created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (seller_id) REFERENCES users(id) ON DELETE CASCADE
);

