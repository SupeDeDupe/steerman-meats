// import logo from "./logo.svg";
import "./App.scss";
// import image1 from "./images/image1.png";

function App() {
  return (
    <div className="App">
      <div className="AppLanding">
        <div className="LandingContent">
          <header>
            <h1>Fresh, locally raised Prince Edward Island Meats.</h1>
          </header>
          <div className="ButtonContainer">
            <button className="Primary">View cuts</button>
            <button className="Secondary">Gallery</button>
          </div>
          {/* TODO: fix absolute positioning of button but keep it at the bottom */}
          <div className="WhoAreWeButtonContainer">
            <button className="WhoAreWeButton Secondary">Who are we?</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
