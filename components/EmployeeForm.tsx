// components/EmployeeForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

interface EmployeeFormProps {
  onSubmit: (employeeData: any) => void; // Define the shape of employee data
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit }) => {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    // Other employee properties
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(employeeData);
  };

  return (
    <div>
      <Typography variant="h5">Employee Details</Typography>
      <TextField
        name="firstName"
        label="First Name"
        variant="outlined"
        fullWidth
        value={employeeData.firstName}
        onChange={handleChange}
      />
      {/* Add fields for other employee properties */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </div>
  );
};

export default EmployeeForm;
