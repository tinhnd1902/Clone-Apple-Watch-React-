import axiosClient from "./axiosClient";
import { Features } from "../redux/features/interfaceFeature";

export const featuresApi = {
  getAll: () => {
    const url = "feautures";
    return axiosClient.get(url);
  },
};
