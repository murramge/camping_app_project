import {authInstance} from '../../utils/axios';

export const postWriteCommunityData = async body => {
  try {
    const res = await authInstance.post('/community', body, {
      headers: {
        accept: '*/*',
        'content-type': 'multipart/form-data',
      },
      transformRequest: (data, headers) => {
        return data;
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
