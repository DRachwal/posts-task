import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: []
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setPostComments(state, action) {
      const { postId, postComments } = action.payload;

      const existingPost = state.posts.find(post => post.id === postId);
      existingPost.comments = postComments;
    },
    toggleComments(state, action) {
      const existingPost = state.posts.find(post => post.id === action.payload);
      existingPost.showComments = !existingPost.showComments;
    },
    disableFetchComments(state, action) {
      const existingPost = state.posts.find(post => post.id === action.payload);
      existingPost.fetchComments = false;
    },
    addPostComment(state, action) {
      const existingPost = state.posts.find(post => post.id === action.payload.postId);
      existingPost.comments.push(action.payload);
    }
  },
});

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;