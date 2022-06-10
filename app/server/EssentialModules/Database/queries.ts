export const QUERY = {
  ADD_NEW_USER: "INSERT INTO Users ( email, fname, lastActive, lname, name, userID) values(?, ?, ?, ?, ?, ?)",
  GET_USER_DATA: (uid: string) => {
    return `SELECT * FROM Users where userID="${uid}"`;
  },
};
