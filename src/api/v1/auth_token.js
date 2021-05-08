import * as SecureStore from 'expo-secure-store';

export const getAuthToken = async () => {
  return await SecureStore.getItemAsync('token');
};

export const destroyAuthToken = async () => {
  return await SecureStore.deleteItemAsync('token');
};
