export default {
  users(state) {
    if (!state.search) {
      return state.users;
    }
    return state.users.filter(({ name }) =>
      name.toLowerCase().includes(state.search.toLowerCase())
    );
  },
};
