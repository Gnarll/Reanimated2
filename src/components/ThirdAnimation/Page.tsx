import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native"; 
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";
 
interface IPageProps {
  title: string,
  index: number,
  translateX: Animated.SharedValue<number>
}

const {width, height} = Dimensions.get('window')

const SQUARE_SIZE = width * 0.7

export const Page: React.FC<IPageProps> = ({title, index, translateX}) => {

  const reanimatedStyle = useAnimatedStyle(() => {

    const scale = interpolate(translateX.value, [(index - 1) * width, index * width,(index + 1) * width], [0, 1, 0], Extrapolate.CLAMP)

    const borderRadius = interpolate(translateX.value, [(index - 1) * width, index * width,(index + 1) * width], [0, SQUARE_SIZE / 2, 0], Extrapolate.CLAMP)

    return {
      transform: [{scale}],
      borderRadius
    }
  })


  const reanimatedTextStyle = useAnimatedStyle(() => {

    const opacity = interpolate(translateX.value, [(index - 1) * width, index * width,(index + 1) * width], [-1, 1, -1], Extrapolate.CLAMP)
    const translateY = interpolate(translateX.value, [(index - 1) * width, index * width,(index + 1) * width], [-height / 2, 1, -height / 2], Extrapolate.CLAMP)

    return {
      opacity,
      transform: [{translateY}]
    }
  })

  return <View style={[styles.pageContainer, {backgroundColor: `rgba(0, 0, 256, ${0.1 + index / 15})`}]}>
    <Animated.View style={[styles.square, reanimatedStyle]} />
    <Animated.View style={[{position: 'absolute'}, reanimatedTextStyle]}>
      <Text style={[styles.text]}>{title}</Text>
    </Animated.View>
     </View>
}


const styles = StyleSheet.create({
    pageContainer: {
      width,
      height,
      justifyContent: 'center',
      alignItems: 'center',
    },
    square: {
      width: SQUARE_SIZE,
      height: SQUARE_SIZE,
      backgroundColor: 'rgba(0, 0, 256, 1))',
    },
    text: {
      fontSize: 60,
      fontWeight: 'bold',
      color: 'white'
    }
})