import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background_primary};
  display: flex;
  flex-direction: column;

  .pageBody {
    padding: 55px;
    white-space: pre-line;

    .header {
        font-family: 'Abril Fatface', serif;
        font-size: 5rem;
        color: ${({theme}) => theme.background_secondary}
    }

    .subtitle {
        font-family:  'Montserrat', sans-serif;
        font-size: 1rem;
        color: ${({theme}) => theme.font_primary};
    }
  }
`;
