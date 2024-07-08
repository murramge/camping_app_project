import {swaggerInstance} from '../../utils/axios';

export const getArticleData = async value => {
  try {
    const {data} = await swaggerInstance.get(`/article?sortType=${value}`, {
      headers: {
        accept: '*/*',
      },
    });
    return data.result;
  } catch (error) {
    console.log(error);
  }
};
