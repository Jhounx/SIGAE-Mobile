import React, {useState, forwardRef} from 'react';
import { View} from 'react-native';
import {Input, Subtitle, SubtitleText} from './styles'
import Fade from '../fade'

const loginInput = ({placeholder, setValue, value, ...rest}, ref) => {
  const [backgroundFocus, setBackgroundFocus] = useState('#9392b9')
  const [visivel, setVisivel] = useState(false)

  return (
    <View style={{marginTop: 18}}>
      <Fade visible={visivel} duration={500}>
        <Subtitle>
          <SubtitleText style={{color: backgroundFocus}}>{placeholder}</SubtitleText>
        </Subtitle>
      </Fade>
      <Input style={{borderColor: backgroundFocus}} 
        onFocus={()=>{setBackgroundFocus("#827ffe")}} 
        onChangeText={(text)=>{setValue(text); if(!visivel) {setVisivel(true)}}} ref={ref}
        onBlur={()=>{if(value == '') {setBackgroundFocus("#9392b9"); setVisivel(false);}}} 
        placeholder={placeholder} value={value} {...rest} />
       
    </View>
  );
}

export default forwardRef(loginInput);