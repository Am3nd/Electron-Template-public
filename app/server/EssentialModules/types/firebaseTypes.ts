type currentUserType = {
  userID: string; //Customer id
  lastActivity: number; // Timestamp of lastactivity
  name: string; // Customer name
  email: string; // Customer email
  setupMode: boolean;
};

type userDetails = {
  fname?: string; // Users FName and Lname
  lname?: string; // Users FName and Lname
  email?: string; // Users email
  password?: string; // Users password
  setupMode?: boolean;
  userID?: string;
};
