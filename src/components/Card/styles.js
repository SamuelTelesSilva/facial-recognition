import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 300px;
    font-weight: bold;
    background: #F6F6F8;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);

    .cor-detail{
       width: 100%;
       height: 8px;
       background: linear-gradient(to right, red, blue);
    }

    .area-texto-title{
        display: flex;
        width: 100%;
        height: 100px;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: #5602CC;
    }

    .area-texto-principal{
        display: block;
        padding: 0px 20px 0px 20px;
        width: 100%;
        justify-content: center;
        margin-top: 8px;
        color: #5602CC;

        p{
            margin-top: 8px;
            color: black;
        }

    }
`;