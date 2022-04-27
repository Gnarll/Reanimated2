import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from "react-native-reanimated";
import { SIZE } from "../../constants";



export const FirstAnimation = () => {
    const progress = useSharedValue(1) 
    const scale = useSharedValue(2)
    const animatedStyles = useAnimatedStyle(() => {
        return { 
            transform: [{scale: scale.value}, {rotate: `${progress.value * 2 * Math.PI}rad`} ],
            opacity: progress.value,
            borderRadius: progress.value * SIZE / 2
        } 
    },)

    useEffect(() => {
        progress.value = withRepeat(withSpring(0.5), -1, true)
        scale.value = withRepeat(withSpring(1), -1, true)
    }, [])

  return <View style={styles.container}>
        <Animated.View style={[styles.figure, animatedStyles]} />
     </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    figure:{
        width: SIZE,
        height: SIZE,
        backgroundColor: 'blue'
    }
})