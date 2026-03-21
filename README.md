

# MySql-blog-app ✍️

A full-stack blog application designed with a React frontend and an Express/Node.js backend, powered by a MySQL database. This application enables users to manage blog posts through a secure, authenticated interface.

![GitHub stars](https://img.shields.io/github/stars/Kyaw-Min-Khant/MySql-blog-app) ![GitHub language count](https://img.shields.io/github/languages/count/Kyaw-Min-Khant/MySql-blog-app) ![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)

## 📑 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Database Setup](#-database-setup)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [License](#-license)

## 🌟 Features
- 🔐 **Authentication**: User registration and secure login using JWT (JSON Web Tokens).
- 📝 **CRUD Operations**: Create, Read, Update, and Delete blog posts.
- 🛡️ **Route Guards**: Protected routes ensuring only authenticated users can create, edit, or delete content.
- 🎨 **Modern UI**: Built with Tailwind CSS and Mantine components for a responsive and clean design.
- ⚡ **State Management**: Redux Toolkit used for efficient state handling across the application.
- 🔄 **Real-time feedback**: Integrated with `react-hot-toast` for user notifications.

## 🛠 Tech Stack
| Role | Technology |
| :--- | :--- |
| **Frontend** | React, Vite, Tailwind CSS, Mantine, Redux Toolkit |
| **Backend** | Node.js, Express, JSONWebToken, Crypto-JS |
| **Database** | MySQL (via mysql2 driver) |

## 🚀 Installation

### Prerequisites
- Node.js installed
- MySQL server running

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Kyaw-Min-Khant/MySql-blog-app
   ```

2. **Setup Server:**
   ```bash
   cd server
   npm install
   # Create a .env file with: PORT, HOST, USERDATA, PASSWORD, DATABASE, DBPORT, PASSWORD_SECRET, JWTSEC
   node index.js
   ```

3. **Setup Client:**
   ```bash
   cd client
   npm install
   npm run dev
   ```

## 🗄 Database Setup
Execute the following in your MySQL environment:
```sql
CREATE DATABASE Blog;
USE Blog;

CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50),
  email VARCHAR(50) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE Post (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  content VARCHAR(1000),
  user_id INT
);
```

## 💡 Usage
1. Register an account using the Sign Up page.
2. Login to get an access token stored in Cookies.
3. Create new posts via the 'Create' button.
4. Edit or delete your own posts from the post list.

## 📁 Project Structure
- `/client`: React application containing components, API services, and pages.
- `/server`: Express API with routes for `auth` and `blog` logic.


#
![drawSQL-blog-export-2023-08-24](https://github.com/Kyaw-Min-Khant/MySql-blog-app/assets/115208028/ea43972e-7f68-4af5-9863-311e866b650f)


---
Created by [Kyaw-Min-Khant](https://github.com/Kyaw-Min-Khant). If you find this project helpful, please consider giving it a ⭐ on [GitHub](https://github.com/Kyaw-Min-Khant/MySql-blog-app).

---
