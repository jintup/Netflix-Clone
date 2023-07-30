import AsyncStorage from '@react-native-async-storage/async-storage';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signup = async (email, password) => {
  const users = await getAllUsers();
  const existingUser = users.find((user) => user.email === email);
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email address');
  }
  if (!passwordRegex.test(password)) {
    throw new Error(
      'Password must be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, one digit, and one special character',
    );
  }
  if (existingUser) {
    throw new Error('User already exists');
  }
  const newUser = { email, password };
  await saveUser(newUser);
  return newUser;
};

export const login = async (email, password) => {
  const users = await getAllUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Invalid email or password');
  }
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
