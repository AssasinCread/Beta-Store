import axios from "axios";

const params = {
  headers: {
    authorization:
      "bearer " +
      "ec5c910639b0b65cbd864aa770618001d87fd653865012a5a414adf927e71bddb2e9b6281b21b583574ee9144f606be8dab12ab5f365d0ccde830c598fd3d98fafe69ebc7636bfc27f59bc9c90c853b068e0de0d8baab1ac1fdf686f14be1211f2aa8116c786afb98b3d5896ee2909a3d397366ecde161234fa153a5a3683bee",
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:1337" + url, params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: "http://localhost:1337",
  headers: {
    authorization:
      "bearer " +
      "ec5c910639b0b65cbd864aa770618001d87fd653865012a5a414adf927e71bddb2e9b6281b21b583574ee9144f606be8dab12ab5f365d0ccde830c598fd3d98fafe69ebc7636bfc27f59bc9c90c853b068e0de0d8baab1ac1fdf686f14be1211f2aa8116c786afb98b3d5896ee2909a3d397366ecde161234fa153a5a3683bee",
  },
});
