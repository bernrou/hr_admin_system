// pages/api/departments.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Departmentdb from '@/utils/departmentsdb'; // Import the db instance
import { fetchDepartmentsFromDatabase, createDepartmentInDatabase } from '../utils/departmentsdbUtils'; // Import utility functions for departments

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Handle GET request for fetching departments
    try {
      const departments = await fetchDepartmentsFromDatabase();
      res.status(200).json(departments);
    } catch (error) {
      console.error('Error fetching department data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'POST') {
    // Handle POST request for creating a new department
    const newDepartment = JSON.parse(req.body);
    try {
      const createdDepartment = await createDepartmentInDatabase(newDepartment);
      res.status(201).json(createdDepartment);
    } catch (error) {
      console.error('Error creating department:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // Handle other HTTP methods if needed
    res.status(405).end(); // Method Not Allowed
  }
};
