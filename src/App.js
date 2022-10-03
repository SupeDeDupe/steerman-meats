// import logo from "./logo.svg";
import "./App.css";
// import image1 from "./images/image1.png";

function App() {
  return (
    <div className="App">
      {/* <img src={image1} alt="meat"></img> */}
      <div
        className="App-landing"
        // style={{
        //   background: `url(${image1})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundColor: "rgba(0, 0, 0, 0.5)",
        // }}
      >
        <header>
          <p>Fresh, locally raised Prince Edward Island Meats.</p>
          <button>View cuts</button>
          <button>Gallery</button>
        </header>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
