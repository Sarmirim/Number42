# Number42
Number42 is a [Node-Express](https://expressjs.com) server for run with [React](https://reactjs.org/) and work with requests for MySQL.

- [Number42](#number42)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Express](#express)
    - [React](#react)
  - [Quick start](#quick-start)
  - [Update](#update)
    - [dependencies](#dependencies)

---
## Features

Password-hashing 

JSON Web Tokens

## Installation

```bash
git clone https://github.com/Sarmirim/Number42.git && cd ./Number42 && npm install
cd .\react\ && npm install
```
---
## Usage
### Express
```bash
npm run dev     // nodemon index.js
```

### React
```bash
cd .\react\
npm run dev  // react-scripts start
```

---
## Quick start
1. Create database from [TESTDB.sql](./TESTDB.sql)

2. Apply your MySQL settings in [db.js](./database/db.js)

3. Browser: <localhost:3000>

---

## Update 
### dependencies
```bash
npm-check-updates -u
npm install
cd .\react\ && npm-check-updates -u
npm install
```