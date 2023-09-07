// db.ts
import nano from 'nano';

// CouchDB connection configuration
const couchDBUrl = 'http://admin:123456@127.0.0.1:5984'; // Replace with your CouchDB credentials
const dbName = 'employees'; // Replace with your actual database name

// Create a CouchDB client
const couchDBClient = nano(couchDBUrl);

// Connect to the database
const Employeesdb = couchDBClient.use(dbName);

// Export the database instance for use in other parts of your application
export default Employeesdb;
