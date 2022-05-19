import React, { useCallback, useRef, useState } from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring } from "react-native-reanimated";

const {width: SIZE} = Dimensions.get('window')


export const FifthAnimation = () => {

  const [isLiked, setIsLiked] = useState(false)

  const AnimatedImage = Animated.createAnimatedComponent(Image)

  const doubleTapRef = useRef()

  const scale = useSharedValue(0)

  const opacity = useSharedValue(0)

  const onSingleTap = useCallback(() => {
    console.log('asdads');
    
    opacity.value = withSpring(1, undefined, (isFinished) => {
      if(isFinished) {
        opacity.value = withDelay(500, withSpring(0))
      } 
    })
  }, [])

  const rStyleText = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  })

  const onDoubleTap = useCallback(() => {
    console.log('asdasd');
    
    scale.value = withSpring(1, undefined, (isFinished) => {
      if(isFinished) {
        scale.value = withDelay(500, withSpring(0))
      } 
    })
    setIsLiked((prev) => !prev)
  }, [])

  const rStyle = useAnimatedStyle(() => ({
      transform: [{scale: Math.max(scale.value, 0)}]
  }))
 
  return <View style={styles.container}>
    <TapGestureHandler waitFor={doubleTapRef}
     onActivated={onSingleTap}>
      <TapGestureHandler ref={doubleTapRef} numberOfTaps={2} maxDelayMs={250} onActivated={onDoubleTap}>
        <Animated.View>
          <ImageBackground style={styles.image} source={require('../../assets/background.jpeg')}>
            <AnimatedImage style={[styles.image, {shadowOffset: {width: 0, height: 20}, shadowOpacity: 0.35, shadowRadius: 35}, rStyle]} resizeMode="center" source={`${isLiked ? require('../../assets/heart.png') : require('../../assets/whiteHeart.png')}`} />
          </ImageBackground>
          <Animated.Text style={[styles.turtles, rStyleText]}>🐢🐢🐢🐢🐢🐢</Animated.Text>
        </Animated.View>
      </TapGestureHandler>
    </TapGestureHandler>
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: SIZE,
    height: SIZE
  },
  turtles: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
  }
})