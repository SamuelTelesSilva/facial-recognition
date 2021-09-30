import React from 'react';
import {Container} from './styles';


const Button = (props) =>{

    return(
        <Container cor={props.cor} authenticated={props.authenticated}>            
            <div className="conte-button">
                {props.title}
            </div>        
        </Container>
    );
}
export default Button;