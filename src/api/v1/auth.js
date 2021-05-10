import * as SecureStore from 'expo-secure-store';

export const setAuthTokenAsync = async (token) => {
  await SecureStore.setItemAsync('token', token);
};

export const getAuthTokenAsync = async () => {
  return await SecureStore.getItemAsync('token');
};

export const destroyAuthTokenAsync = async () => {
  return await SecureStore.deleteItemAsync('token');
};
