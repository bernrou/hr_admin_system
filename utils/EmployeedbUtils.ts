// dbUtils.ts
import { MaybeDocument, ViewDocument } from 'nano';
import Employeedb from '../utils/Employeesdb'; // Import the db instance

// Function to fetch employees from the database
export async function fetchEmployeesFromDatabase() {
  try {
    // Use the db instance to query the database
    const result = await Employeedb.view('your-design-document-name', 'your-view-name'); // Replace with your design document and view names
    const employees = result.rows.map((row) => row.value);

    return employees;
  } catch (error) {
    throw error;
  }
}

// Function to create an employee in the database
export async function createEmployeeInDatabase(dbName: MaybeDocument | ViewDocument<unknown>) {
  try {
    // Use the db instance to insert the employee data into the database
    const response = await Employeedb.insert(dbName);

    // Return the created employee with the generated ID
    return { id: response.id, ...dbName };
  } catch (error) {
    throw error;
  }
}
