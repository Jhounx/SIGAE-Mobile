import {TextInput, Text, View} from 'react-native'
import styled from 'styled-components'

export const Subtitle = styled(View)`
  position: absolute;
  height: 18px;
  top: -12px;
  left: 10px;
  padding: 0px 3px 3px 3px;
  background-color: #fff;
  font-size: 15px;
  z-index: 1;
  color: #827ffe;
`

export const SubtitleText = styled(Text)`
  font-size: 15px;
  z-index: 1;
  color: #827ffe;
`

export const Input = styled(TextInput)`
  color: #17161a;
  width: 100%;
  height: 50px;
  padding-top: 2px;
  padding-left: 38px;
  padding-right: 10px;
  font-size: 18px;
  background-color: white;
  border: 2px solid #9392b9;
  border-radius: 3.5px;
  background-color: white;
`


