import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 55px;
    gap: 50px;
    position: sticky;

    button {
        width: fit-content;
        height: fit-content;
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.background_secondary};
        font-size: 1.25rem;
        cursor: pointer;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        color: ${({theme}) => theme.background_secondary};
    }
`