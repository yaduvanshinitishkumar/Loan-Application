import Axios from "../../../services/Axios";

const actions = {
  login({ commit }, formData) {
    const username = formData.username;
    const password = formData.password;

    const response = Axios.login("/login", { username, password });
    if (response.success) {
      commit("SET_AUTH_DATA", response);
      localStorage.setItem("userId", response.userId);
      localStorage.setItem("authToken", response.authToken);
    }

  },

  logout({ commit }) {
    commit("RESET_AUTH_DATA");
  },

  autoLogin({ commit }) {
    const userId = localStorage.getItem("userId");
    const authToken = localStorage.getItem("authToken");
    const response = Axios.getUserProfile({ userId, authToken });

    if (response.success) {
      commit("SET_AUTH_DATA", response);
      localStorage.setItem("userId", response.userId);
      localStorage.setItem("authToken", response.authToken);
    }
  }
};

export default actions;
