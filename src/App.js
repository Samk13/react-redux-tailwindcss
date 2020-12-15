import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="bg-blue-900 container m-auto text-white">
      <div className="mx-2">
        <h1 className="text-center text-4xl font-black p-5">Test!</h1>
        <div>
          <p>login status</p>
          <div>
            {logged ? (
              <div>You are logged in</div>
            ) : (
              <div>You are NOT are logged in</div>
            )}
          </div>
          <div>
            <button
              onClick={() => dispatch(actions.loggin())}
              className="border py-2 px-5 rounded-full"
            >
              {logged ? "log in" : "log out"}
            </button>
          </div>
        </div>

        <div>
          <h1>Counter {counter}</h1>
          <div className="space-x-2 p-5">
            <button
              onClick={() => dispatch(actions.increment(3))}
              className="border py-2 px-5 rounded-full"
            >
              increment
            </button>
            <button
              onClick={() => dispatch(actions.decrement())}
              className="border py-2 px-5 rounded-full"
            >
              decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
