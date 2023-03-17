import React from "react";
import styled from "styled-components";
import { Seat } from "./Seat";
import { createDeck, drawCardsFromDeck } from "@pairjacks/poker-cards";
import { CommunityCards } from "./CommunityCards";

let deck = createDeck();
const drawCards = drawCardsFromDeck(deck, 2);
const cards = drawCards.cards;
deck = drawCards.deck;
const communityCards = drawCardsFromDeck(deck, 5).cards;

export const PokerTable = () => {
  const players = [
    undefined,
    {
      name: "🧕",
      amount: 800,
      cards: cards,
      isDeader: false,
      isHidden: true,
      hand: "Full house"
    },
    {
      name: "👨‍🎨",
      amount: 1000,
      cards: cards,
      isDeader: true,
      isTurn: true,
      hand: "Full house"
    },
    {
      name: "🧕",
      amount: 800,
      cards: cards,
      isDeader: false,
      isWin: true,
      winAmount: 450,
      hand: "Four of a kind"
    },
    {
      name: "🕺",
      amount: 800,
      cards: cards,
      isDeader: false,
      isHidden: true,
      hand: "Full house",
      isFolded: true
    },
    {
      name: "🕺",
      amount: 800,
      cards: cards,
      isDeader: false,
      isHidden: true,
      hand: "Full house",
      isAway: true
    }
  ];

  return (
    <Wrapper>
      <Table>
        <Pot>123</Pot>
        <CommunityCards cards={communityCards} />
        <Seats>
          {players.map((player, index) => (
            <Seat key={index} player={player} />
          ))}
        </Seats>
      </Table>
    </Wrapper>
  );
};

const Table = styled.div`
  width: calc(100vh * 16 / 9);
  background: url("https://cdn.pokernow.club/table-fb731769f7aa9b4c6f6a842f3bd1e1d6.png")
    center center / cover;
  background-size: cover;
  background-position: center;
  position: relative;
  height: 84%;
  margin: 0 auto;
`;

const Pot = styled.div`
  position: absolute;
  top: 24%;
  left: 43.4%;
  width: 13%;
  height: 7%;
  display: flex;
  color: #fff;
  font-weight: 600;
  font-size: 1.25rem;
  justify-content: center;
  align-items: center;
`;

const Seats = styled.div`
  position: absolute;
  top: 60%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: url(https://cdn.pokernow.club/background-1e322d8c87ed7c812d5b96734c97b8cf.jpg);
  margin: auto;
  height: 100vh;
  width: 100vw;
`;
