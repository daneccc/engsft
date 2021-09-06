import React from 'react';
import { KeyboardView, Title, Container, 
        Input, ButtonSubmit, TextButton, Text } from './styles';
import Header from '../../components/Header';
//import Clipboard from '@react-native-community/clipboard';

function Gerador() {
    const [generatedPassword, setGeneratedPassword] = React.useState('');
    
    return(
        <KeyboardView>
            <Header />
            <Container>
                <Title>Gerador de Senha</Title>

                <Input> {generatedPassword} </Input>
                
                <ButtonSubmit onPress = {() => setGeneratedPassword(genPassword())}>
                    <TextButton>
                        Gerar Senha
                    </TextButton>
                </ButtonSubmit>

            </Container>
        </KeyboardView>
    )
}


function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
       var randomNumber = Math.floor(Math.random() * chars.length);
       password += chars.substring(randomNumber, randomNumber +1);
     }

    return password;
}


export default Gerador;