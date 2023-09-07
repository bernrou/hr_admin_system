// pages/employees.tsx
import React, { useEffect, useState } from 'react';
import EmployeesListView from '../../components/EmployeesListView' 
import axios from 'axios'; 

const EmployeesPage: React.FC = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employee data from your API and update the state
    axios.get('/api/employees').then((response) => {
      setEmployees(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Employees List</h1>
      <EmployeesListView employees={employees} />
    </div>
  );
};

export default EmployeesPage;
