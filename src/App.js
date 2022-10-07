// import logo from "./logo.svg";
import "./App.scss";
// import image1 from "./images/image1.png";

function App() {
  return (
    <div className="App">
      <div className="AppLanding">
        <header>
          <p>Fresh, locally raised Prince Edward Island Meats.</p>
          <div className="ButtonContainer">
            <button className="Primary">View cuts</button>
            <button className="Secondary">Gallery</button>
          </div>
          <button className="WhoAreWeButton Secondary">Who are we?</button>
        </header>
      </div>
    </div>
  );
}

export default App;
