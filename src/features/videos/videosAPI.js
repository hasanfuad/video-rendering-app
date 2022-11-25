import axios from "../../utils/axios";

// videos?tags_like=react&q=javascript

export const getVideos = async ({
  tags,
  search,
  author,
  limit,
  currentPage,
}) => {
  let queryString = "";

  if (author) {
    queryString += `author_like=${author}`;
  }

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  if (limit && currentPage) {
    queryString +=
      tags.length > 0 || search || author
        ? `&_page=$${currentPage}&_limit=${limit}`
        : `_page=${currentPage}&_limit=${limit}`;
  }

  const response = await axios.get(`/videos?${queryString}`);

  return {
    videos: response.data,
    total_count: response.headers["x-total-count"],
  };
};
