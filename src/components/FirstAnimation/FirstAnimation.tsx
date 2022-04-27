import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const SIZE = 150


export const FirstAnimation = () => {
    const progress = useSharedValue(0)
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: {}
        }
    })
  return <View style={styles.container}>
        <Animated.View style={[styles.figure]}>
        </Animated.View>
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