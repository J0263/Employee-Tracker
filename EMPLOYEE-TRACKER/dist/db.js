"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'jorgebush',
    host: 'localhost',
    database: 'department', 
    password: '', 
    port: 5432 // Default PostgreSQL port
});
exports.default = pool;
