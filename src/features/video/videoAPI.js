import axios from "../../utils/axios";

export const getVideo = async (videoId) => {
  const response = await axios.get(`/videos/${videoId}`);
  return response.data;
};

export const updateReaction = async ({ id, reaction }) => {
  const { data } = await axios.get(`/videos/${id}`);

  if (data) {
    let updateReaction =
      reaction === "like"
        ? {
            likes: data.likes + 1,
          }
        : {
            unlikes: data.unlikes + 1,
          };

    const response = await axios.patch(`/videos/${id}`, updateReaction);

    return response.data;
  }
};
