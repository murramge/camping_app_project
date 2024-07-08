import {swaggerInstance} from '../../utils/axios';

export const getCommunityViewsData = async () => {
  try {
    const {data} = await swaggerInstance.get(`/community?page=0&pageSize=10`, {
      headers: {
        accept: '*/*',
      },
    });
    return data.result.content;
  } catch (error) {
    console.log(error);
  }
};

export const getCommunityDetailData = async value => {
  try {
    const {data} = await swaggerInstance.get(`/community/${value}`, {
      headers: {
        accept: '*/*',
      },
    });
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

export const postCommentWriteData = async (id, Comment) => {
  try {
    const res = await swaggerInstance.post(`/community/${id}/reply`, {
      reply: Comment,
    });
  } catch (error) {
    console.log(error);
  }
};
