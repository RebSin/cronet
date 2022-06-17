# cronet
A small website side project to post crochet tutorials I find helpful as I teach myself how to crochet!

Currently using `NodeJS`, `ExpressJS` and `JavaScript` with `MySQL` for the database

To create current DB:
`CREATE DATABASE cronet;`
`CREATE TABLE patterns (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), description VARCHAR(255), steps TEXT(255));`

To install dependencies `npm install` in root
To run, use `node index.js` and `npm start` in client

