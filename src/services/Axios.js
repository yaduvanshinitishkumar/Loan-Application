// NOTE: This is a dummy service.
const ADMIN_USERNAME = "admin";

const axios = {
  login: (url, data) => {
    console.log(url);
    return {
      userId: data.username,
      username: data.username,
      authToken: `${data.username}-${Math.random()}`,
      isAdmin: data.username === ADMIN_USERNAME,
      success: true
    };
  },
  registerLoanApplication: (url, data) => {
    console.log(url);
    console.log(data);
    let applicationDatas = [];
    try {
      const existingApplicationData = JSON.parse(localStorage.getItem("applicationData"));
      applicationDatas = [...existingApplicationData, data];
    } catch (e) {
      console.log(e);
      applicationDatas.push(data);
    }
    localStorage.setItem("applicationData", JSON.stringify(applicationDatas));
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
      isAdmin: username === ADMIN_USERNAME,
      success: true
    };
  }

};

export default axios;