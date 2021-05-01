const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

const login = () => {
  return {
    type: "LOG_IN",
  };
};

export { increment, decrement, logout, login };
