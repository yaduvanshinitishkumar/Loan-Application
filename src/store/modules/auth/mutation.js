const mutations = {
  SET_AUTH_DATA: (state, formData) => {
    state.username = formData.username;
    state.userId = formData.userId;
    state.authToken = formData.authToken;
  },
  RESET_AUTH_DATA: (state) => {
    state.username = null;
    state.userId = null;
    state.authToken = null;
  }
};

export default mutations;
