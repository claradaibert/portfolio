import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  .imgBackground {
    height: 350px;
    width: 350px;
    background-color: ${({ theme }) => theme.background_secondary};
    position: relative;
    z-index: 2;
    top: 10px;
    left: 10px;
    border-radius: 5%;

    @media screen and (max-width: 500px) {
      height: 250px;
      width: 250px;
    }
  }

  img {
    height: 350px;
    z-index: 3;
    border-radius: 5%;
    position: absolute;

    @media screen and (max-width: 500px) {
      height: 250px;
    }
  }
`;
