import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fffa;
  padding: 70px 30px 0px 30px;
`

export const Title = styled.Text`
    font-size: 20px;
    text-align: center;
    color: rgb(84,113,156);
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 85%;
` 

export const Form = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 30px;
`

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #3f51b5;
  border-radius: 4px;
  padding: 6px 16px;
  height: 43px;
  margin-top: 10px;
`

export const TextButton = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`

export const ErrorContainer = styled.View`
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 30px;
  background-color: #f8d7da;
  border-radius: 3px;
  justify-content: space-between;
  flex-direction: row;
`

export const TextError = styled.Text`
  color: #721c24;
  font-size: 16px;
  margin-bottom: 3px;
`