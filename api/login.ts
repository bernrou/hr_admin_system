// // pages/api/login.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import jwt from 'jsonwebtoken'; // Import the jwt package
// import { isValidCredentials } from './authUtils'; // Replace with your authentication logic

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     // Extract email and password from the request body
//     const { email, password } = req.body;

//     // Implement your authentication logic here (e.g., check against a database)
//     if (isValidCredentials(email, password)) {
//       // Successful login
//       // Generate a JWT token
//       const token = generateAuthToken(email);

//       // Send the token as a response
//       res.status(200).json({ token });
//     } else {
//       // Invalid credentials
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   } else {
//     // Handle other HTTP methods if needed
//     res.status(405).end(); // Method Not Allowed
//   }
// };

// // Example authentication functions (replace with your actual implementation)
// function isValidCredentials(email: string, password: string): boolean {
//   // Implement your authentication logic here (e.g., check against a database)
//   // Return true if valid, false otherwise
//   return email === 'hradmin@test.com' && password === 'TestPass1234';
// }

// function generateAuthToken(email: string): string {
//   // Generate a JWT token with a payload that includes the user's email
//   const token = jwt.sign({ email }, 'your-secret-key', { expiresIn: '1h' }); // Replace 'your-secret-key' with a strong secret

//   return token;
// }
