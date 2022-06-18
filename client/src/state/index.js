import { combineReducers } from "redux";

import { reducer as posts } from "./reducers/posts";
import { reducer as auth } from "./reducers/auth";

export default combineReducers({
  posts,
  auth,
});
