import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  postComments: [],
  showComments: false
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setPostComments(state, action) {
        state.postComments = action.payload;
    },
    toggleComments (state, action) {
        const existingPost = state.posts.find(post => post.id === action.payload);
        existingPost.showComments = !existingPost.showComments;
    }
  },
});

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
