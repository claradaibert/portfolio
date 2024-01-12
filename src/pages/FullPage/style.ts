import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: fit-content;
  background-color: ${({ theme }) => theme.background_primary};
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;
