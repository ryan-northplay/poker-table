import styled, { css } from "styled-components";

const f = {
  Two: "2",
  Three: "3",
  Four: "4",
  Five: "5",
  Six: "6",
  Seven: "7",
  Eight: "8",
  Nine: "9",
  Ten: "10",
  Jack: "J",
  Queen: "Q",
  King: "K",
  Ace: "A"
};

const s = {
  Diamonds: "♦",
  Clubs: "♣",
  Heart: "♥",
  Spades: "♠"
};

const colors = {
  Diamonds: "#db3131",
  Heart: "#db3131",
  Clubs: "#2c2c2c",
  Spades: "#2c2c2c"
};

export const Card = ({ card, isBig = false }) => {
  const [face, suit] = card;

  return (
    <CardContainer color={colors[suit]} isBig={isBig}>
      <F isBig={isBig}>{f[face]}</F>
      <S isBig={isBig}>{s[suit]}</S>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 3.5rem;
  height: 4.5rem;
  position: relative;
  background: white;
  border-radius: 8px;
  font-size: bold;
  box-shadow: 0 0 0.8rem 0 rgb(0 0 0 / 40%);
  ${({ color }) => `color: ${color};`}
  ${({ isBig }) =>
    isBig &&
    css`
      width: 4.5rem;
      height: 6rem;
    `}
`;

const F = styled.div`
  position: absolute;
  font-size: 26px;
  font-weight: 600;
  left: 10%;

  ${({ isBig }) => isBig && `font-size: 35px;`}
`;

const S = styled.div`
  position: absolute;
  font-size: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -40%);
  ${({ isBig }) => isBig && `font-size: 70px;`}
`;
