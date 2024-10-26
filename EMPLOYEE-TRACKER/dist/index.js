"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const queries_1 = require("./queries");
const mainMenu = async () => {
    const { action } = await inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Exit'
            ]
        }
    ]);
    switch (action) {
        case 'View all departments':
            await (0, queries_1.viewAllDepartments)();
            break;
        case 'View all roles':
            await (0, queries_1.viewAllRoles)();
            break;
        case 'View all employees':
            await (0, queries_1.viewAllEmployees)();
            break;
        case 'Exit':
            process.exit();
    }
    mainMenu();
};
mainMenu();
