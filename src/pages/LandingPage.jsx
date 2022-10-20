import "./LandingPage.scss";
import { ReactComponent as ArrowDown } from "../svgs/arrow_down.svg";
import { AppFooter } from "../components/AppFooter";
import { DoubleLinkSet, StyledLink } from "../components/DoubleLinkSet";
import styled from "styled-components";

const FACTS_LIST = [
  "A proud producer of PEI Certified Beef",
  "Farm fresh custom cuts of beef, pork, and chicken",
  "Offering our customers quality meat cuts at affordable prices",
];

export function LandingPage() {
  return (
    <div id="LandingPage">
      <StyledFullscreenDiv id="AppLandingTop">
        <header>
          <h1>Fresh, locally raised Prince Edward Island Meats.</h1>
        </header>
        <DoubleLinkSet
          primaryLinkHref="#AppLandingBottom"
          primaryLinkLabel="View cuts"
          secondaryLinkHref="#"
          secondaryLinkLabel="Gallery"
        />
        <div className="WhoAreWeLinkContainer">
          <StyledLink href="#AppLandingMiddle" className="Secondary Button">
            <span>Who are we?</span>
            <ArrowDown style={{ padding: "0 10px" }} />{" "}
          </StyledLink>
        </div>
      </StyledFullscreenDiv>

      <StyledFullscreenDiv id="AppLandingMiddle">
        <h2>
          A local family with a history of serving the people of Prince Edward
          Island.
        </h2>
        <ul>
          {FACTS_LIST.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <DoubleLinkSet
          primaryLinkHref="#"
          primaryLinkLabel="About us"
          secondaryLinkHref="#AppLandingBottom"
          secondaryLinkLabel="View cuts"
          positionRight="true"
        />
      </StyledFullscreenDiv>

      <StyledFullscreenDiv id="AppLandingBottom">
        <h2>Any cut you want, we have it.</h2>
        <DoubleLinkSet
          primaryLinkHref="#"
          primaryLinkLabel="Order now"
          secondaryLinkHref="#"
          secondaryLinkLabel="Learn more"
        />
      </StyledFullscreenDiv>
      <AppFooter />
    </div>
  );
}

const StyledFullscreenDiv = styled.div`
  min-height: 100vh;
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
