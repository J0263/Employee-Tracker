"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewAllEmployees = exports.viewAllRoles = exports.viewAllDepartments = void 0;
const db_1 = __importDefault(require("./db"));
const viewAllDepartments = async () => {
    const result = await db_1.default.query('SELECT * FROM department');
    console.table(result.rows);
};
exports.viewAllDepartments = viewAllDepartments;
const viewAllRoles = async () => {
    const result = await db_1.default.query(`
    SELECT role.id, role.title, department.name AS department, role.salary
    FROM role
    JOIN department ON role.department_id = department.id
  `);
    console.table(result.rows);
};
exports.viewAllRoles = viewAllRoles;
const viewAllEmployees = async () => {
    const result = await db_1.default.query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
  `);
    console.table(result.rows);
};
exports.viewAllEmployees = viewAllEmployees;
// Add other query functions like addDepartment, addRole, addEmployee, etc.
