import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostType} from 'types/post';

interface PostStateI {
  posts: PostType[];
}

const initialState: PostStateI = {
  posts: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearState: state => {
      state.posts = [];
    },
    addPost: (state, action: PayloadAction<PostType>) => {
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const {clearState, addPost} = postSlice.actions;

export default postSlice.reducer;
