const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const SECRET_KEY = 'your-secret-key';
const dataPath = path.join(__dirname, '../data/users.json');
// Helper functions to manage users
function getUserData() {
const jsonData = fs.readFileSync(dataPath);
return JSON.parse(jsonData);
}
function saveUserData(data) {
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}
