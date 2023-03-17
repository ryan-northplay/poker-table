import React from "react";
import styled, { css } from "styled-components";
import { CloseIcon } from "../assets/close";
import { Player } from "./Player";
import { Disconnect } from "../assets/disconnect";

export const Seat = ({ player }) => {
  if (!player)
    return (
      <Wrapper>
        <EmptyCard>Empty</EmptyCard>
      </Wrapper>
    );
  const {
    amount,
    name,
    cards,
    isDeader,
    isTurn,
    isHidden,
    isWin,
    hand,
    winAmount,
    isFolded,
    isAway
  } = player;

  return (
    <Wrapper>
      <Card isTurn={isTurn} isWin={isWin} isFolded={isFolded} isAway={isAway}>
        <Name>
          {name}
          {isDeader ? <Dealer>D</Dealer> : ""}
        </Name>
        <Amount>{amount}</Amount>
        {isFolded ? (
          <FoldedWrapper>
            <CloseIcon />
            <p>Fold</p>
          </FoldedWrapper>
        ) : (
          <PlayerWrapper>
            <Player cards={cards} isHidden={isHidden} />
          </PlayerWrapper>
        )}

        {!isHidden && <Hand>{hand}</Hand>}
        {winAmount ? <Win>+{winAmount}</Win> : ""}
        {isAway ? (
          <AwayCover>
            <Disconnect />
            Away
          </AwayCover>
        ) : (
          ""
        )}
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0.5rem;
`;

const Name = styled.div`
  text-align: left;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const Dealer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #eee;
  font-size: 1rem;
`;

const Amount = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
`;

const FoldedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & svg {
    opacity: 0.5;
  }

  & p {
    color: #666;
    text-transform: uppercase;
    margin: 0;
    margin-top: 4px;
    font-size: 0.875rem;
  }
`;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  transition: all 500ms ease;
  position: relative;
  padding: 1.5rem 1rem;
  width: 8rem;
  height: 10rem;
  border-radius: 1.5rem;
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  ${({ isTurn }) => isTurn && "box-shadow: rgb(255 255 255) 0px 2px 30px 2px;"}
  ${({ isWin }) => isWin && "box-shadow: rgb(114 255 114) 0px 2px 30px 2px;"}
  ${({ isFolded }) => isFolded && `opacity: 0.8`}
  ${({ isAway }) =>
    isAway &&
    css`
      opacity: 0.8;
      background: #ddd;
    `}
`;

const EmptyCard = styled(Card)`
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  background: #333;
  opacity: 0.4;
  color: #eee;
  border: 2px dashed #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;

const Hand = styled.div`
  color: #fff;
  font-size: 0.875rem;
  border-radius: 6px;
  background: #ce4949;
  width: 70%;
  position: absolute;
  bottom: -0.5rem;
  left: 15%;
`;

const Win = styled.div`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 6px;
  background: #2e8a2e;
  width: 50%;
  position: absolute;
  top: -0.5rem;
  left: 25%;
`;

const AwayCover = styled.div`
  border-radius: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eee;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  color: #ed4f1c;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.25rem;
`;
