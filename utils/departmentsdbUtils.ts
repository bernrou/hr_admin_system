import { MaybeDocument, ViewDocument } from 'nano';
import Departmentsdb from '../utils/departmentsdb'; // Import the db instance for departments

// Function to fetch departments from the database
export async function fetchDepartmentsFromDatabase() {
  try {
    // Use the db instance to query the database
    const result = await Departmentsdb.view('_design/departments', 'by_name_and_status'); // Replace with your design document and view names
    const departments = result.rows.map((row) => row.value);

    return departments;
  } catch (error) {
    throw error;
  }
}

// Function to create a department in the database
export async function createDepartmentInDatabase(departmentData: MaybeDocument | ViewDocument<unknown>) {
  try {
    // Use the db instance to insert the department data into the database
    const response = await Departmentsdb.insert(departmentData);

    // Return the created department with the generated ID
    return { id: response.id, ...departmentData };
  } catch (error) {
    throw error;
  }
}
