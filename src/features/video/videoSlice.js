import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo, updateReaction } from "./videoAPI";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideo = createAsyncThunk(
  "video/fetchVideo",
  async (videoId) => {
    const video = await getVideo(videoId);
    return video;
  }
);

export const updateVideoReaction = createAsyncThunk(
  `/video/updateReaction`,
  async ({ id, reaction }) => {
    const updatedVideo = await updateReaction({ id, reaction });
    return updatedVideo;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });

    builder
      .addCase(updateVideoReaction.pending, (state, action) => {
        return state;
      })
      .addCase(updateVideoReaction.fulfilled, (state, action) => {
        state.video.likes = action.payload.likes;
        state.video.unlikes = action.payload.unlikes;
      })
      .addCase(updateVideoReaction.rejected, (state, action) => {
        return state;
      });
  },
});

export default videoSlice.reducer;
