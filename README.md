# Customer Mock Database Management System

A full-stack MERN (MySQL, Express, React, Node.js) application for managing customer records. This project allows users to view, create, and update customer data stored in a MySQL database.

## 🚀 Features
- **Frontend**: Built with React and React Router for seamless navigation.
- **Backend**: Node.js and Express.js REST API.
- **Database**: MySQL integration for persistent data storage.
- **UI**: Custom CSS with hover effects and responsive table layouts.

## 🛠️ Tech Stack
- **Frontend**: React, Axios, React Router, CSS3.
- **Backend**: Node.js, Express, Cors.
- **Database**: MySQL (via XAMPP/phpMyAdmin).

---

## 📋 Prerequisites
Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [XAMPP](https://www.apachefriends.org/index.html) (for MySQL/Apache)
- Git

---

## ⚙️ Setup Instructions

### 1. Database Setup
1. Open **XAMPP Control Panel** and start **Apache** and **MySQL**.
2. Go to `http://localhost/phpmyadmin`.
3. Create a new database named `master`.
4. Import your `customer` table or create it using:
   ```sql
   CREATE TABLE customer (
     cust_id INT PRIMARY KEY,
     cust_name VARCHAR(255),
     cust_address VARCHAR(255),
     cust_amount INT
   );


Navigate to backend folder :
cd backend

Install dependencies:
npm install

Start the server:
noder server.js
The server should be running on http://localhost:8081.

Open a new terminal and navigate to the frontend folder:
cd frontend

Install dependencies:
npm install

Start the React application:
npm start
The app will open automatically at http://localhost:3000.

