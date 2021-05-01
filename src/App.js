import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logout, login } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const handleLoggin = () => {
    if (isLogged) {
      dispatch(logout);
      return;
    }
    dispatch(login);
  };

  return (
    <div className="App">
      Hello - {counter}
      {isLogged ? <p>Sensitive Data</p> : <p>Non-sensitive data</p>}
      <button onClick={() => dispatch(increment())}>UP</button>
      <button onClick={() => dispatch(decrement())}>UP</button>
      <button onClick={handleLoggin}>{isLogged ? "Log out" : "Log in"}</button>
    </div>
  );
}

export default App;
