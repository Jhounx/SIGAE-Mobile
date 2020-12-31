import React, {useState, useEffect, useRef} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import Wrapper from '../../components/wrapper'
import Footer from '../../components/footer'
import {Container, Title, Form, Button, TextError, TextButton, ErrorContainer} from './styles'
import Logo from '../../assets/imagens/sigae.svg'
import Input from '../../components/loginInput'
import {Ionicons as Icon} from '@expo/vector-icons'
import Fade from '../../components/fade'
import Rotate from '../../components/rotate'
import Spinner from '../../assets/imagens/spinner.svg'
import sleep from '../../utils/sleep'

export default function Home() {
  const [matricula, setMatricula] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fadeVisible, setFadeVisible] = useState(false)
  const passwordInput = useRef()

  useEffect(()=>{
    if(matricula.length == 11) {
      passwordInput.current.focus()
    }
  }, [matricula])

  const loginButton = () => {
    setError(true)
    setFadeVisible(true)
  }

  const blurError = () => {
    setFadeVisible(false); 
    setTimeout(()=>{setError(false)}, 500);
  }

  const blurLoading = () => {
    setFadeVisible(false); 
    setTimeout(()=>{setLoading(false)}, 500);
  }

  return (
    <Wrapper>
      <Container>
        <Logo />
        <Title>Sistema De Gerenciamento De Atendimento ao Estudante</Title>
        <Form>
          <Input placeholder="Sua Matricula" value={matricula} setValue={setMatricula} keyboardType="numeric" maxLength={11}/>
          <Input placeholder="Sua Senha" value={password} setValue={setPassword} ref={passwordInput} secureTextEntry={true} />
          <Button activeOpacity={0.7} onPress={loginButton}>
            <TextButton>Logar</TextButton>
          </Button>
          <Fade duration={500} visible={fadeVisible}>
            {error && (
              <ErrorContainer>
                <View style={style.errorLabel}>
                  <TextError>Matricula ou Senha Incorretos!</TextError>
                  <TextError style={{fontWeight: "bold", color: "#3f4c6b"}}>Esqueceu a Senha?</TextError>
                </View> 
                <View style={style.errorButton}>
                  <TouchableOpacity activeOpacity={0.5} onPress={blurError}>
                    <Icon name="close" size={20} color="rgb(114, 99, 100)"/>
                  </TouchableOpacity>
                </View>
              </ErrorContainer>
            )}
            {loading && (
              <View style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Rotate duration={1500}>
                  <Spinner color="black"/>
                </Rotate>
              </View>
            )}
          </Fade>
        </Form>
      </Container>
      <Footer />
    </Wrapper>
  )
}

const style = StyleSheet.create({
  errorButton: {
    marginLeft: 7, 
    marginRight: 15, 
    alignItems: "center", 
    justifyContent: "center"
  },
  errorLabel: {
    alignItems: "flex-start",
    marginLeft: 12,
    marginRight: 7
  }
})


