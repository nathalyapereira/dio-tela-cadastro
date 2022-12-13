import React from 'react';
import { Button } from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {CadastroContainer, Row, Column, Title, TitleCadastro, SubtitleCadastro, TextLogin, Login, Wrapper } from './styles';

const Cadastro = () => {

    return (<>
        <Header />
        <CadastroContainer>
            <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.
            </Title>
            </Column>
            
            <Column>
            <Wrapper>
            <TitleCadastro>Comece agora grátis</TitleCadastro>
            <SubtitleCadastro> Crie sua conta e make the change._</SubtitleCadastro>
            
            <form>
            <Input type="text" name="Nome" placeholder="Nome Completo "/>
            <Input type="text" name="Email" placeholder="Email"/>
            <Input type="text" name="Senha" placeholder="Password"/>
            <Button title="Entrar" variant="secondary" type="submit"/>
            </form>

            <Row>
            <SubtitleCadastro> 
                Ao clicar em "criar minha conta grátis", declaro
                 que aceito as Políticas de Privacidade e os Termos
                  de Uso da DIO.
            </SubtitleCadastro>
            </Row>
            <Row>
            <TextLogin>Já tenho conta.<Login>Fazer login</Login></TextLogin>
            </Row>
            </Wrapper>
            </Column>
        
        </CadastroContainer>

        </>);

}

export { Cadastro }
