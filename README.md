# MySql-blog-app
This is a simple CRUD application for Blog. It allows creating, reading, updating and deleting blog records in a database.
# Features
<ul>
  <li>User registration with secure password hashing</li>
  <li>Login with JWT authentication</li>
  <li>Fetch all posts</li>
  <li>Fetch a single post by ID</li>
  <li>Create,Update and Delete post</li>
</ul>

 # Usage
 <ul>
   <li>Nodejs,nodemon</li>
   <li>Mysql Database</li>
 </ul>
 
 # Installation
 <ol>
   <li>Clone the repository</li>
   <li>
     <h5>For Client Folder</h5>
     <ul>
       <li> cd client /</li>
       <li> npm i </li>
       <li> npm run dev </li>
     </ul>
  <li>
    <h5>For Server Folder,You will use a new terminal check foldername</h5>
   <ul>
   <li>cd server /</li>
   <li>npm i</li>
   <li>nodemon index.js</li>
     </ul>
   </li>
   </li>
     
   </li>
 </ol>
 
 # DataBase Setup
 <h5>
The project uses a MySQL database for storing user and post data. To set up the database schema locally:</h5>
<ol>
  <li> CREATE DATABASE Blog ;</li>
  <li> USE Blog ;</li>
  <li> 
  CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50),
  email VARCHAR(50) UNIQUE,  
  password VARCHAR(255)
);</li>
  <li>
    CREATE TABLE Post (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  content VARCHAR(1000),
  user_id INT
);
  </li>
</ul>

#
![drawSQL-blog-export-2023-08-24](https://github.com/Kyaw-Min-Khant/MySql-blog-app/assets/115208028/ea43972e-7f68-4af5-9863-311e866b650f)
