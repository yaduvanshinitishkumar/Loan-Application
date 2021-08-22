// NOTE: This is a dummy service.
const axios = {
  login: (url, data) => {
    console.log(url);
    return {
      userId: data.username,
      username: data.username,
      authToken: `${data.username} + ${Math.random()}`,
      success: true
    };
  },
  registerLoanApplication: (url, data) => {
    console.log(url);
    console.log(data);
  }

};

export default axios;