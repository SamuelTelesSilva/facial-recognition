import styled from 'styled-components';

export const Container = styled.div`
    grid-area: H;
    display: flex;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: white;
    transition: all ease 0.5s;
    opacity: 0.9;
    
    .barHeader{
        font-weight: bold;
        font-size: 25px;
        color: var(--corPrincipal);
    }
    
    
`;