import { v4 as uuid4 } from "uuid";




let users = [];

// Get Information of all user
export const getUsers = (req, res) => {
  res.send(users);
};

// Creating a new User
export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid4() });
  res.send(`POST ROUTE REACHED${user.firstName} added to the database!`);
};


// Get user information with ID
export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};


// Deleting User with ID
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with thr ${id} deleted from the database.`);
};


// Updating User with ID
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`user with the id ${id} has been updated`);
};


