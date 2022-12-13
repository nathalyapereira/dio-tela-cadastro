import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {Container, Wrapper, Menu, Row} from './styles';

const Header = () => {

    return (
        <Wrapper>
        <Container>
            <Row>
            <img src={logo} alt="Logo da Dio" />
            </Row>
            <Row>
            <Menu href="/">Home</Menu>
            <Button title="Entrar" />
            <Button title="Cadastrar" />
            </Row>
        </Container>
        </Wrapper>

    );

}

export default Header
