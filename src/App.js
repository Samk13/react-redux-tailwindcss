import logo from "./logo.svg";

function App() {
  return (
    <div className="bg-blue-900 container m-auto text-white">
      <header className="flex flex-col">
        <img src={logo} className="w-36" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
