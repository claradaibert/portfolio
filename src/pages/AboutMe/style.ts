import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  align-self: center;
  height: fit-content;
  padding: 0 100px 0 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    padding: 0;
  }

  .bodyArea {
    display: flex;
    flex-direction: column;
    height: 350px;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 960px) {
      align-items: center;
      height: fit-content;
      gap: 3rem;
    }

    .textBody {
      font-family: "Montserrat", sans-serif;
      color: ${({ theme }) => theme.font_primary};
      font-size: 1rem;
      width: 100%;
      text-align: right;
      line-height: 3.5;

      @media screen and (max-width: 960px) {
        text-align: center;
      }
    }
  }
`;
