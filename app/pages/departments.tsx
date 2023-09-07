import React, { useEffect, useState } from 'react';
import DepartmentsListView from '../../components/DepartmentsListView';
import axios from 'axios'; // Use Axios or another library for API calls

const DepartmentsPage: React.FC = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch department data from your API and update the state
    axios.get('/api/departments').then((response) => {
      setDepartments(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Departments List</h1>
      <DepartmentsListView departments={departments} />
    </div>
  );
};

export default DepartmentsPage;
