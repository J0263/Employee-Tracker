import inquirer from 'inquirer';
import { viewAllDepartments, viewAllRoles, viewAllEmployees } from './queries';

const mainMenu = async () => {
  const { action } = await inquirer.prompt([
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
      await viewAllDepartments();
      break;
    case 'View all roles':
      await viewAllRoles();
      break;
    case 'View all employees':
      await viewAllEmployees();
      break;
    case 'Exit':
      process.exit();
  }

  mainMenu();
};

mainMenu();