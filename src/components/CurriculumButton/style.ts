import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    height: fit-content;
    padding: 0.5rem 0;
    border: none;
    border-radius: 15px;
    background-color: ${({theme}) => theme.background_secondary};
    display: flex;
    justify-content: center;

    a {
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.25rem;
        color: ${({theme}) => theme.background_primary};
    }
`