import pool from './db';

export const viewAllDepartments = async (): Promise<void> => {
  const result = await pool.query('SELECT * FROM department');
  console.table(result.rows);
};

export const viewAllRoles = async (): Promise<void> => {
  const result = await pool.query(`
    SELECT role.id, role.title, department.name AS department, role.salary
    FROM role
    JOIN department ON role.department_id = department.id
  `);
  console.table(result.rows);
};

export const viewAllEmployees = async (): Promise<void> => {
  const result = await pool.query(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id
    FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id
  `);
  console.table(result.rows);
};

// Add other query functions like addDepartment, addRole, addEmployee, etc.