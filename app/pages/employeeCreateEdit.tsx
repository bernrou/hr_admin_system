import React, { useEffect, useState } from 'react';
import EmployeeForm from '../../components/EmployeeForm'
import axios from 'axios'; 

const EmployeeCreateEditPage: React.FC = () => {
  const [employee, setEmployee] = useState({}); // Initialize with an empty object for a new employee

  useEffect(() => {
    // Fetch employee data for editing (if applicable) from your API and update the state
    // Example: axios.get(`/api/employees/${employeeId}`).then((response) => {
    //   setEmployee(response.data);
    // });
  }, []);

  const handleSubmit = (employeeData: any) => {
    // Submit the employee data to your API for creation/editing
    // Example: axios.post('/api/employees', employeeData).then(() => {
    //   // Redirect to the Employees List View after successful submission
    //   router.push('/employees');
    // });
  };

  return (
    <div>
      <h1>Create/Edit Employee</h1>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default EmployeeCreateEditPage;
