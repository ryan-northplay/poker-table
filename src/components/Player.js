import styled, { css } from "styled-components";
import { Card } from "./Card";
import { FlipCard } from "./FlipCard";

export const Player = ({ cards, isHidden }) => {
  return (
    <Wrapper>
      {cards.map((card, index) =>
        !isHidden ? <Card key={index} card={card} /> : <FlipCard />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
