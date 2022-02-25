import * as api from "../api";

const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";
const CREATE_POST = "CREATE_POST";

//Actions

const fetchAllPosts = (data) => ({ type: FETCH_ALL_POSTS, payload: data });
const createNewPost = (data) => ({ type: CREATE_POST, payload: data });

// Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(fetchAllPosts(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(createNewPost(data));
  } catch (error) {
    console.log(error.message);
  }
};
