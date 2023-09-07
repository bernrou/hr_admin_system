// components/EmployeesListView.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  // Other employee properties
}

interface EmployeesListViewProps {
  employees: Employee[];
}

const EmployeesListView: React.FC<EmployeesListViewProps> = ({ employees }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email</TableCell>
            {/* Add more table headers for other employee properties */}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.firstName}</TableCell>
              <TableCell>{employee.lastName}</TableCell>
              <TableCell>{employee.phoneNumber}</TableCell>
              <TableCell>{employee.email}</TableCell>
              {/* Render other employee data */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeesListView;
