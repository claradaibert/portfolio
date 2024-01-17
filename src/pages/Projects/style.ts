import styled from "styled-components";

export const Container = styled.div`
  padding: 150px 55px 55px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    font-family: "Abril Fatface", serif;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.background_secondary};
  }

  .projectList {
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;

    .listItem {
      margin-bottom: 3rem;
      list-style-position: inside;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      .projectName {
        font-size: 1rem;
      }

      .projectSubtitle {
        font-size: 0.75rem;
      }
    }
  }
`;
