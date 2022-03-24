const loginUser = (data) => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = (data) => {
  return {
    type: "LOGOUT",
  };
};

export { loginUser, logoutUser };
