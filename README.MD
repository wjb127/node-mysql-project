# Node MySQL Project

This is a simple Node.js project that connects to a MySQL database and provides a REST API to retrieve user data.

## Features
- Connects to a MySQL database using `mysql2`.
- Provides a GET API endpoint to retrieve all users.
- Utilizes environment variables for secure configuration.

---

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [Docker](https://www.docker.com/) (optional for running MySQL in a container)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/node-mysql-project.git
   cd node-mysql-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the MySQL database:
   - Use Docker to run a MySQL container (example):
     ```bash
     docker run --name my-mysql -e MYSQL_ROOT_PASSWORD=1111 -d -p 3306:3306 mysql:latest
     ```
   - Create the database and table:
     ```sql
     CREATE DATABASE sample_db;
     USE sample_db;
     
     CREATE TABLE users (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(100),
         email VARCHAR(100),
         age INT
     );

     INSERT INTO users (name, email, age) VALUES
     ('Alice', 'alice@example.com', 25),
     ('Bob', 'bob@example.com', 30);
     ```

4. Configure environment variables:
   - Create a `.env` file in the project root:
     ```plaintext
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=######
     DB_NAME=sample_db
     DB_PORT=3306
     ```

---

## Usage

1. Start the server:
   ```bash
   node index.js
   ```

2. Access the API endpoint:
   - Open your browser or use Postman to test the API:
     ```
     GET http://localhost:3000/users
     ```
   - Example response:
     ```json
     [
       { "id": 1, "name": "Alice", "email": "alice@example.com", "age": 25 },
       { "id": 2, "name": "Bob", "email": "bob@example.com", "age": 30 }
     ]
     ```

---

## Project Structure

```
node-mysql-project/
├── index.js         # Main server file
├── package.json     # Project metadata and dependencies
├── .env             # Environment variables
├── .gitignore       # Git ignore rules
└── node_modules/    # Installed dependencies
```

---

## Contributing
If you'd like to contribute, feel free to fork the repository and submit a pull request.

---

## License
This project is licensed under the MIT License.
