import React from 'react';
import { KeyboardView, Title, Container, 
        Input, ButtonSubmit, TextButton, Text } from './styles';
import Header from '../../components/Header';
import Clipboard from '@react-native-community/clipboard';

function Signin() {
    return(
        <KeyboardView>
            <Header />
            <Container>
                <Title>Gerador de Senha</Title>

                <Text
                    style={{
                    fontSize: 50,
                    fontWeight: "bold",
                    color: "#008000",
                    marginBottom: "10%"
                    }}
                >                

                </Text>
                
                <ButtonSubmit onPress = {() => genPassword()}>
                    <TextButton>
                        Gerar Senha
                    </TextButton>
                </ButtonSubmit>

                <ButtonSubmit onPress = {() => copyPassword()}>
                    <TextButton>
                        Copiar Senha
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

    document.getElementById("campoSenha").innerHTML = password;
    //console.log(password);
    //alert(password);
    //return password;
}

function copyPassword() {
    Clipboard.setString("aaaa")
}

export default Signin;