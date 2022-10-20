import styled from "styled-components";

export function DoubleLinkSet({
  primaryLinkHref,
  primaryLinkLabel,
  secondaryLinkHref,
  secondaryLinkLabel,
  positionRight = false,
}) {
  return (
    <StyledContainer positionRight={positionRight}>
      <StyledLink href={primaryLinkHref} className="Primary Button">
        {primaryLinkLabel}
      </StyledLink>
      <StyledLink href={secondaryLinkHref} className="Secondary Button">
        {secondaryLinkLabel}
      </StyledLink>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: ${(props) => (props.positionRight ? "right" : "left")};
`;

export const StyledLink = styled.a`
  cursor: pointer;
  box-sizing: border-box;
  background: transparent;
  margin: 30px 0;
  padding: 10px 24px;

  color: #fff;
  font-size: 24px;
  font-family: "Jomolhari";
  text-align: center;
  text-decoration: none;

  &.Primary {
    background: #ba1f34;
    border: 1px solid #ba1f34;
    &:hover {
      border: 1px solid #fff;
    }
  }
  &.Secondary {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #fff;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;
