import styled, { css } from "styled-components";

export const FlipCard = () => {
  return (
    <CardContainer>
      <Content />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: #fff;
  display: flex;
  padding: 0.125rem 0.25rem;
  width: 3.5rem;
  height: 4.5rem;
  border-radius: 8px;
  box-shadow: 0 0 0.8rem 0 rgb(0 0 0 / 40%);
`;

const Content = styled.div`
  width: 100%;
  background: url(https://cdn.pokernow.club/card-back-e179802aacf69d36821f780d501e4706.png);
  background-size: cover;
  background-position: center;
`;
