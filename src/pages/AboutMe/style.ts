import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .textBody{
        font-family:  'Montserrat', sans-serif;
        color: ${({theme}) => theme.font_primary};
        font-size: 1rem;
        width: 60%;
        text-align: center;
        line-height: 3.5;
    }
`