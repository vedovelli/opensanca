import * as userService from "../../../services/users";

export default {
  async fetchUsers({ commit }) {
    const users = (await userService.fetchUsers()).data.users;
    commit("ADD_USERS", users);
  },
  setSearch({ commit }, search) {
    commit("SET_SEARCH", search);
  },
};
