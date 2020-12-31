import React, {useEffect} from 'react';
import { Animated } from 'react-native';

const rotate = ({children, duration}) => {
  const animation = new Animated.Value(0)
  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  useEffect(()=>{
    Animated.loop(
      Animated.timing(animation, 
        {
          toValue: 1, 
          duration, 
          useNativeDriver: false
        })
    ).start(); 
  }, [])

  return (
  <Animated.View style={{transform: [{rotate: rotation}] }}>
    {children}
  </Animated.View>
  );
}

export default rotate;