import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background_primary};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    min-height: 60vh;
  }

  .pageBody {
    padding: 200px 55px 85px;
    white-space: pre-line;

    .header {
      font-family: "Abril Fatface", serif;
      font-size: 5rem;
      color: ${({ theme }) => theme.background_secondary};

      @media screen and (max-width: 960px) {
        font-size: 3.5rem;
      }

      @media screen and (max-width: 530px) {
        font-size: 2.5rem;
      }
    }

    .subtitle {
      font-family: "Montserrat", sans-serif;
      font-size: 1rem;
      color: ${({ theme }) => theme.font_primary};

      @media screen and (max-width: 600px) {
        margin-top: 0.5rem;
      }
    }
  }
`;
