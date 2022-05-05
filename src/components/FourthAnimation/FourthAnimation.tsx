import React, { useState } from "react";
import { Dimensions, StyleSheet, Switch, View } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from "react-native-reanimated";
import { Colors, SWITCH_TRACK_COLOR } from "../../constants";
import { Theme } from "../../types";




export const FourthAnimation = () => {

  const [theme, setTheme] = useState<Theme>('light')

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0)
  }, [theme])

  const rStyle = useAnimatedStyle(() => {
    
    const backgroundColor = interpolateColor(progress.value, [0, 1], [Colors.light.background, Colors.dark.background])

    return {
      backgroundColor
    }
  })
  const rCircleStyle = useAnimatedStyle(() => {
    
    const backgroundColor = interpolateColor(progress.value, [0, 1], [Colors.light.circle, Colors.dark.circle])

    return {
      backgroundColor
    }
  })

  const rTextStyle = useAnimatedStyle(() => {
    
    const color = interpolateColor(progress.value, [0, 1], [Colors.light.text, Colors.dark.text])

    return {
      color
    }
  })
  
  return <Animated.View style={[styles.container, rStyle]}>
    <Animated.Text style={[styles.text, rTextStyle]}>Theme</Animated.Text>
    <Animated.View style={[styles.circle, rCircleStyle]}>
      <Switch value={theme === 'dark'} onValueChange={(toggled) => {
        toggled ? setTheme('dark') : setTheme('light')
      }} trackColor={SWITCH_TRACK_COLOR} thumbColor={'violet'}/>
    </Animated.View>
  </Animated.View>
}

const SIZE = Dimensions.get('window').width * 0.7

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }, 
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  text: {
    fontSize: 60,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 20,
    marginBottom: 30,
  }
})