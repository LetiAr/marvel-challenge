import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
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

export const getCharacterComics = async (characterId) => {
  const request = await axiosInstance.get(`/characters/${characterId}/comics`);
  return request.data;
};

export const getComicById = async (comicId) => {
    const request = await axiosInstance.get(`/comics/${comicId}`);
    return request.data;
  };

export const getComicByTitle = async (comicTitle, comicYear, comicIssue) => {
    const request = await axiosInstance.get(`/comics`, {
      params: {
        title: comicTitle,
        startYear: comicYear,
        issueNumber: comicIssue,
      },
    });
    return request.data;
  };