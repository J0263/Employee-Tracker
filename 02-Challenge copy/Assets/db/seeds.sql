-- Drop tables if they exist to reset the database
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

-- Create the department table
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- Create the role table
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER REFERENCES department(id) ON DELETE CASCADE
);

-- Create the employee table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER REFERENCES role(id) ON DELETE CASCADE,
    manager_id INTEGER REFERENCES employee(id) ON DELETE SET NULL
);

-- Insert data into the department table
INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance');

-- Insert data into the role table
INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Manager', 80000, 1),
    ('Engineer', 70000, 2),
    ('Accountant', 60000, 3);

-- Insert data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),  -- John Doe is the Sales Manager
    ('Jane', 'Smith', 2, 1),   -- Jane Smith is an Engineer reporting to John Doe
    ('Bob', 'Brown', 3, 1);    -- Bob Brown is an Accountant reporting to John DoeDROP