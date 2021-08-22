// NOTE: This is a dummy service.
const axios = {
  login: (url, data) => {
    console.log(url);
    return {
      userId: data.username,
      username: data.username,
      token: `${data.username} + ${Math.random()}`
    };
  },
  registerLoanApplication: (url, data) => {
    console.log(url);
    console.log(data);
  }

};

export default axios;