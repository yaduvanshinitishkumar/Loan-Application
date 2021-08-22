const mutations = {
  LOGIN: (state, formData) => {
    state.username = formData.username;
    state.userId = formData.userId;
    state.authToken = formData.authToken;
  },
  LOGOUT: (state) => {
    state.username = null;
    state.userId = null;
    state.authToken = null;
  }
};

export default mutations;
