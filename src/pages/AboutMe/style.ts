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

    .bodyArea {
        display: flex;
        flex-direction: column;
        height: 350px;
        justify-content: space-between;
        align-items: flex-end;

        .textBody{
            font-family:  'Montserrat', sans-serif;
            color: ${({theme}) => theme.font_primary};
            font-size: 1rem;
            width: 100%;
            text-align: right;
            line-height: 3.5;
        }
    }
`