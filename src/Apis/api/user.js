import {authInstance, swaggerInstance} from '../../utils/axios';
import {setStorage} from '../../utils/storages';

export const setCookie = cookie => {
  swaggerInstance.defaults.headers.Cookies = JSON.parse(cookie);
};

export const postSignUpData = async signUpdata => {
  try {
    const res = await swaggerInstance.post(`/accounts`, signUpdata, {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postLoginData = async logindata => {
  try {
    const res = await swaggerInstance.post('/auth', logindata, {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    });
    const [cookie] = res.headers['set-cookie'];
    setCookie(JSON.stringify(cookie));
    await setStorage('cookie', JSON.stringify(cookie));
    return cookie;
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = async () => {
  try {
    const {data} = await authInstance.get('/accounts/info', {
      headers: {
        accept: '*/*',
        'content-type': 'multipart/form-data',
      },
    });
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

export const patchProfileEdit = async profiledata => {
  console.log(profiledata);
  try {
    const data = await swaggerInstance.patch('/accounts', profiledata, {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
