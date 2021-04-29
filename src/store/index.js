import { createStore } from "vuex";
import users from "../features/Users/store";

export default createStore({
  modules: { users },
});
