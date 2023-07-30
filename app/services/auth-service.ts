import AsyncStorage from '@react-native-async-storage/async-storage';

export const signup = async (email, password) => {
  // Check if the user with the given email already exists in local storage
  const users = await getAllUsers();
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Create a new user object
  const newUser = { email, password };

  // Save the new user in local storage
  await saveUser(newUser);

  // Return the newly created user
  return newUser;
};

export const login = async (email, password) => {
  // Get all users from local storage
  const users = await getAllUsers();

  // Find the user with the given email and password
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Return the logged-in user
  return user;
};

const getAllUsers = async () => {
  const usersJSON = await AsyncStorage.getItem('users');
  return usersJSON ? JSON.parse(usersJSON) : [];
};

const saveUser = async (user) => {
  const users = await getAllUsers();
  users.push(user);
  await AsyncStorage.setItem('users', JSON.stringify(users));
};
