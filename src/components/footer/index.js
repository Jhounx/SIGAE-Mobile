import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import openURL from '../../utils/openURL'

const footer = () => {
  return (
  <View style={style.mainContainer}>
    <Text style={style.text}>© 2020 SiGAÊ | Desenvolvimento:</Text>
    <Text style={style.textIfba} onPress={()=>{openURL("https://portal.ifba.edu.br/")}}>IFBA</Text>
  </View>);
}


const style = StyleSheet.create({
  mainContainer: {
    height: 45, 
    alignItems: "center", 
    justifyContent: "center", 
    width: "100%", 
    backgroundColor: "rgba(219,221,224,0.692)",
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
    color: "#3f4c6b",
    fontWeight: "500"
  },
  textIfba: {
    color: "rgb(40,167,69)", 
    fontWeight: "600", 
    marginLeft: 4,
    fontSize: 15
  }
})

export default footer;