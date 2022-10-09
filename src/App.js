import "./App.scss";

function App() {

  const FACTS_LIST = [
    "A proud producer of PEI Certified Beef", 
    "Farm fresh custom cuts of beef, pork, and chicken", 
    "Offering our customers quality meat cuts at affordable prices"
  ];

  return (
    <div className="App">
      <div id="AppLandingTop" className="AppLandingTop FullScreenBackground">
          <header>
            <h1>Fresh, locally raised Prince Edward Island Meats.</h1>
          </header>
          <div className="ButtonContainer">
            <button className="Primary">View cuts</button>
            <button className="Secondary">Gallery</button>
          </div>
          <div className="WhoAreWeButtonContainer">
            <button className="WhoAreWeButton Secondary">Who are we?</button>
          </div>
      </div>
      <div id="AppLandingMiddle" className="AppLandingMiddle FullScreenBackground">
        <h2>A local family with a history of serving the people of Prince Edward Island.</h2>
        <ul>
          {FACTS_LIST.map((item, idx) => 
            <li key={idx}>{item}</li>
          )}
        </ul>
        <div className="ButtonContainer right">
            <button className="Primary">About us</button>
            <button className="Secondary">View cuts</button>
          </div>
      </div>
    </div>
  );
}

export default App;
