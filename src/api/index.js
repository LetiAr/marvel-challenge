import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: "1690138897",
    apikey: "89a6c40864fecaa1c7fee6008db89aee",
    hash: "bbd4909bb24772a2392ba74dc43e6464",
  },
});

export const searchCharacters = async (searchName) => {
  const request = await axiosInstance.get("/characters", {
    params: {
      nameStartsWith: searchName,
    },
  });

  return request.data;
};
