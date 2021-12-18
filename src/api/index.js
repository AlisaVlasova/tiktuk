const BASE_URL = "https://tiktok33.p.rapidapi.com/";
const TF_URL = BASE_URL + "trending/feed";

// Uncomment next row when Get User Feed works properly
// const UF_URL = BASE_URL + "user/feed/";

const UI_URL = BASE_URL + "user/info/";

const defaultOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66",
  },
};

const getData = (url, options) => {
  try {
    return fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return res;
      });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getTrendingFeedData = async () => {
  return await getData(TF_URL, defaultOptions);
};

export const getUserFeedData = async (name) => {
  // Uncomment next row when Get User Feed works properly...
  // return await getData(UF_URL + name, defaultOptions);

  // ...and remove nex row
  const arr = await getTrendingFeedData();

  return arr.filter((item) => item.authorMeta.name === name);
};

export const getUserInfoData = async (name) => {
  return await getData(UI_URL + name, defaultOptions);
};
