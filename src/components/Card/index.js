import React from 'react';
import {Container} from './styles';

const Card = (props) => {

    return(
        <Container>
            <div className="cor-detail"></div>
            <div className="area-texto-title">
                <h1>{props.titulo}</h1>
            </div>
            <div className="area-texto-principal">
                <span>{props.subtitulo}</span>
                <p>
                    {props.descricao}
                </p>
            </div>
           
        </Container>
    );
    
}
export default Card;