import "./LandingPage.scss";
import {ReactComponent as ArrowDown} from "./arrow_down.svg"
import { AppFooter } from "./AppFooter";

const FACTS_LIST = [
  "A proud producer of PEI Certified Beef", 
  "Farm fresh custom cuts of beef, pork, and chicken", 
  "Offering our customers quality meat cuts at affordable prices"
];

export function LandingPage(){
  return (
    <div id="LandingPage">
      <div id="AppLandingTop" className="FullScreenBackground">
        <header>
          <h1>Fresh, locally raised Prince Edward Island Meats.</h1>
        </header>
        <div className="ButtonContainer">
          <a href="#AppLandingBottom" className="Primary Button">View cuts</a>
          <a href="#" className="Secondary Button">Gallery</a>
        </div>
        <div className="WhoAreWeLinkContainer">
          <a href="#AppLandingMiddle" className="Secondary Button"><span>Who are we?</span><ArrowDown style={{padding: "0 10px"}}/> </a>
        </div>
      </div>
      <div id="AppLandingMiddle" className="FullScreenBackground">
        <h2>A local family with a history of serving the people of Prince Edward Island.</h2>
        <ul>
          {FACTS_LIST.map((item, idx) => 
            <li key={idx}>{item}</li>
          )}
        </ul>
        <div className="ButtonContainer right">
          <a href="#" className="Primary Button">About us</a>
          <a href="#AppLandingBottom" className="Secondary Button">View cuts</a>
        </div>
      </div>
      <div id="AppLandingBottom" className="FullScreenBackground">
        <h2>Any cut you want, we have it.</h2>
        <div className="ButtonContainer">
          <a href="#" className="Primary Button">Order now</a>
          <a href="#" className="Secondary Button">Learn more</a>
        </div>
      </div>
      <AppFooter/>
    </div>
  )
}