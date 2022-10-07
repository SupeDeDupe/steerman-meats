// import logo from "./logo.svg";
import "./App.scss";
// import image1 from "./images/image1.png";

function App() {
  return (
    <div className="App">
      <div className="AppLanding">
        <header className="LandingContent">
          <p>Fresh, locally raised Prince Edward Island Meats.</p>
          <div className="ButtonContainer">
            <button className="Primary">View cuts</button>
            <button className="Secondary">Gallery</button>
          </div>
          {/* TODO: fix absolute positioning of button but keep it at the bottom */}
          <div className="WhoAreWeButtonContainer">
            <button className="WhoAreWeButton Secondary">Who are we?</button>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
