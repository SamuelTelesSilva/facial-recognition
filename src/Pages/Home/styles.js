import styled from "styled-components";


export const Layout = styled.div`
    display: grid;
    grid-template-rows: 72px auto 50px;
    
    grid-template-areas:
        'H'
        'M'
        'F'
    ;
    height: 100%;
`;



export const Main = styled.div`
    display: block;
    grid-area: M;
    width: 100%;
    height: 100%;
`;

export const Principal = styled.div`

    display: flex;
    width: 100%;
    height: 650px;
    background: #F6F6F8;
    padding: 0px 0% 0px 5%;

    .texto-apresentacao{
        display: flex;
        width: 60%;
        height: 100%;
        align-items: center;
    }

    .texto{
        
        span{
            color: var(--corPrincipal);
            font-weight: bold;
        }

        h1{
            font-size: 50px;
            line-height: 1;
            font-weight: 900;
            color: var(--corPrincipal);
            margin: 18px 0px 18px 0px;
        }

        p{
            margin-top: 18px;

        }
    }

    .img-apresentacao{
        display: flex;
        width: 100%;
        height: 100%;

        img{
            width: 100%;
            height: auto;
        }
    }

    @media screen and (max-width: 640px){ 

        display: block;
        padding: 0px;
        height: auto;

        .texto-apresentacao{
            width: 100%;
            height: 300px;
        }

        .texto{
            word-break: break-all;
            justify-content: center;

            h1{
                font-size: 40px;
                margin: 0px 0px 18px 0px;
            }

        }

        .img-apresentacao{
            height: auto;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 1026px){ 
       
    }

`;

export const Apresentacao = styled.div`

    display: flex;
    width: 100%;
    height: 650px;
    background: #7128d7;
    color: white;
    justify-content: center;
    align-items: center;

    .cont-apresentacao{
        display: block;
    }

    .area-title{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 16px;

        h1{
            font-weight: 900;
        }
    }


    .cards-apresentacao{
        display: flex;
        width: 100%;
    }

    .area-card{
        margin-right: 10px;
    }



    @media screen and (max-width: 640px){ 
        display: block;
        height: auto;

        .area-title{
            justify-content: center;

            h1{
                font-size: 20px;
                margin-top: 16px;
            }
        }

        .cards-apresentacao{
            display: block;
        }

        .area-card{
            display: flex;
            width: 100%;
            justify-content: center;
            margin-bottom: 10px;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 1026px){ 

    }

    
`;

export const AreaFaceApi = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    padding: 0px 5% 0px 5%;
    justify-content: center;
    align-items: center;
    background: #5602cc;

    .area-text{
        width: 100%;

    }

    .area-img-faceapi{

        width: 100%;
        height: 100%;

        img{
            width: 100%;
            height: 100%;
        }

    }


`;