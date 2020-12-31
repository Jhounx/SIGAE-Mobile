import React, {useEffect, useRef} from 'react'
import {Animated} from 'react-native'


const FadeInView = ({children, duration, visible}) => {

  const fadeAnim = useRef(new Animated.Value(visible ? 1 : 0)).current

  useEffect(()=>{
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration,
      useNativeDriver: false
    }).start();
  }, [visible])

  return (
    <Animated.View 
      style={{
        opacity: fadeAnim, zIndex: 1
      }}
    >
      {children}
    </Animated.View>
  );
}

export default FadeInView