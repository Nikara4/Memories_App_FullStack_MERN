import * as api from "../api";
import { AUTH, LOGOUT } from "../constants/actionTypes";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: AUTH, payload: data });

    navigate("../", { replace: true });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: AUTH, payload: data });

    navigate("../", { replace: true });
  } catch (error) {
    console.log(error);
  }
};
