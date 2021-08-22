// NOTE: This is a dummy service.
const axios = {
  login: (url, data) => {
    console.log(url);
    return {
      userId: data.username,
      username: data.username,
      authToken: `${data.username}-${Math.random()}`,
      success: true
    };
  },
  registerLoanApplication: (url, data) => {
    console.log(url);
    console.log(data);
    return {
      success: true
    };
  },
  getUserProfile: (data) => {
    console.log(data);
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("userId");// JUST FOR Dummy data
    const authToken = localStorage.getItem("authToken");
    if (userId == "null" || username == "null" || authToken == "null") {
      return {
        success: false
      };
    }
    return {
      userId,
      username,
      authToken,
      success: true
    };
  },

};

export default axios;