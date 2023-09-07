import React, { useEffect, useState } from 'react';
import DepartmentForm from '../../components/DepartmentForm'
import axios from 'axios'; 

const DepartmentCreateEditPage: React.FC = () => {
  const [department, setDepartment] = useState({}); // Initialize with an empty object for a new department

  useEffect(() => {
    // Fetch department data for editing (if applicable) from your API and update the state
    // Example: axios.get(`/api/departments/${departmentId}`).then((response) => {
    //   setDepartment(response.data);
    // });
  }, []);

  const handleSubmit = (departmentData: any) => {
    // Submit the department data to your API for creation/editing
    // Example: axios.post('/api/departments', departmentData).then(() => {
    //   // Redirect to the Departments List View after successful submission
    //   router.push('/departments');
    // });
  };

  return (
    <div>
      <h1>Create/Edit Department</h1>
      <DepartmentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default DepartmentCreateEditPage;
