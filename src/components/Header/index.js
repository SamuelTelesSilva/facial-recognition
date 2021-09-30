import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import {Container} from './styles';

const Header = (props) => {
    return(
        <Container>
            <div className="barHeader">
                Reconhecimento Facial
            </div>
        </Container>
    );
}
export default Header;
