import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .cont-video{
        display: flex;
        
        video{
            border: 3px solid white;
            border-radius: 5px;
        }
    }

    .canvas {
        position: absolute;
    }

    .cont-msg{
        display: flex;
        width: 100%;
        justify-content: center;
        color: white;
        margin-left: 18px;
    }


    @media screen and (max-width: 640px){ 
        display: block;

        .cont-video{
            display: flex;
            
            video{
                width: 100%;
                height: 100%;
                border: 3px solid white;
                border-radius: 5px;
            }
        }
    }

    @media screen and (min-width: 641px) and (max-width: 1026px){ 

    }

`;