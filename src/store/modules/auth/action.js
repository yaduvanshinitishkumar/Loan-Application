const actions = {
  login({state,commit},formData){
    const username = formData.username;
    const password = formData.password;
    console.log(username);
    console.log(password);
    commit();
    console.log(state);
  }
}

export default actions;
