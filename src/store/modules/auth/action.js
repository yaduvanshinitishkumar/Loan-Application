import Axios from "../../../services/Axios";

const actions = {
  login({ commit }, formData) {
    const username = formData.username;
    const password = formData.password;
    console.log(username);
    console.log(password);
    const response = Axios.login("/login", { username, password });
    if (response.success) {
      commit("LOGIN", response);
    }
  },
  logout({ commit }) {
    commit("LOGOUT");
  }
};

export default actions;
