import styled from 'styled-components';

export const Container = styled.div`
    display: ${props => props.authenticated === true ? "none" : "flex"};
    max-width: 150px;
    height: 45px;
    width: 100%;

    .conte-button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background-color: ${props => props.cor ? "var(--corSecundaria)" : "var(--corPrincipal)"};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: white;
    }

    :hover{
        cursor: pointer;
    }
`;