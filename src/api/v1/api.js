import axios from 'axios';
import Qs from 'qs';

// ***SUPER IMPORTANT ANDROID SIMULATOR ONLY***
// the android simulator auto-maps 10.0.2.2 to http://127.0.0.1/ (the default accessible app ip in docker container (windows only?)) for local api requests to a docker backend/api host use '10.0.2.2' in order to access http://127.0.0.1/ ie http://localhost:3001 (or whatever your docker api host is mapped to) HOW STUPID IS THAT!

// TRIGGERS NETWORK ERROR
// const DOCKER_MAC_BASE_URL = 'http://192.1658.1.5:3001';
// TRIGGERS TIMEOUT
// const DOCKER_MAC_BASE_URL = 'http://192.168.1.5:3002';

// const WINDOWS_ANDROID_SIMULATOR_BASE_URL = 'http://10.0.2.2:3001';
// const DOCKER_WINDOWS_BASE_URL = 'http://192.168.0.12:3001';
const LIVE_BASE_URL = 'SOME_PATH_HERE';
const DOCKER_MAC_BASE_URL = 'http://192.168.0.51:3001';

let baseURL;
if (__DEV__) {
  baseURL = DOCKER_MAC_BASE_URL;
} else {
  baseURL = LIVE_BASE_URL;
}

const api = axios.create({
  baseURL,
});

// 14 seconds
api.defaults.timeout = 14000;

// allows nested params in delete requests or any request that only allows a single {} object config to be passed after the route
api.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => {
    // Qs is already included in the Axios package
    return Qs.stringify(params, {
      arrayFormat: 'brackets',
      encode: false,
    });
  };

  return config;
});

export default api;
