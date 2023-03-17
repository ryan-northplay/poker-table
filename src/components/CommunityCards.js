import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

export const CommunityCards = ({ cards }) => {
  return (
    <Wrapper>
      <Cards>
        {cards.map((card) => (
          <Card card={card} isBig />
        ))}
      </Cards>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 35%;
  left: 0;
  height: 4rem;
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
  display: flex;
  width: 26rem;
  justify-content: space-evenly;
`;
