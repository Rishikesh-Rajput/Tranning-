const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const authenticateToken = require('../middleware/authMiddleware');
const dataPath = path.join(__dirname, '../data/students.json');
function getStudentData() {
const jsonData = fs.readFileSync(dataPath);
return JSON.parse(jsonData);
}
function saveStudentData(data) {
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}
