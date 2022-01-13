import { featuresApi } from "../../api/featuresApi";
import { GET_LIST_FEATURE } from "./featureConstant";

export const getListFeature = () => {
  //  try {
  //    const data = featuresApi.getAll();
  //  } catch (error) {
  //    console.log('Failed !!!!', error)
  //  }
  return async (dispatch: any) => {
    try {
      const { data } = await featuresApi.getAll();
      console.log("data", data);

      dispatch({
        type: GET_LIST_FEATURE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
