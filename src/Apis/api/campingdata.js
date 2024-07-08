import {gocampInstance} from '../../utils/axios';
import {SERVICE_KEY} from '@env';

export const getCampingData = async () => {
  try {
    const {data} = await gocampInstance.get(
      `/basedList?serviceKey=${SERVICE_KEY}&numOfRows=10&pageNo=1&MobileOS=IOS&MobileApp=CampingProject&_type=json`,
    );
    return data.response.body.items.item;
  } catch (error) {
    console.log(error);
  }
};
