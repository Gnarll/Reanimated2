import React from "react";
import { StyleSheet, View } from "react-native";
import {   GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { CIRCLE_RADIUS, SIZE } from "../../constants";
import { Dimensions } from 'react-native';
import { withSpring } from "react-native-reanimated";


export const SecondAnimation = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    type ContextType = {
        translationX: number,
        translationY: number
    }

    
    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (event, context) => {
            context.translationX = translateX.value
            context.translationY = translateY.value
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translationX
            translateY.value = event.translationY + context.translationY
        },
        onEnd: (event, context) => { 
            
                const distance = Math.sqrt((translateX.value) ** 2 + translateY.value ** 2)
                
                if(distance < CIRCLE_RADIUS + SIZE / 2) {
                    translateX.value = withSpring(0)
                    translateY.value = withSpring(0)
                }

                if(translateX.value < - ((windowWidth - SIZE) / 2)) {
                    translateX.value = withSpring(0) 
                    translateY.value = withSpring(0)
                }
                if(translateX.value > (windowWidth - SIZE) / 2){
                    translateX.value = withSpring(0) 
                    translateY.value = withSpring(0)
                }
                if(translateY.value < - ((windowHeight - SIZE * 2) / 2)) {
                    translateX.value = withSpring(0) 
                    translateY.value = withSpring(0)
                } 
                if(translateY.value > (windowHeight - SIZE * 2) / 2) {
                    translateX.value = withSpring(0) 
                    translateY.value = withSpring(0)
                }
        },
    }) 

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: translateX.value}, {translateY: translateY.value}]
        }
    })

    return <GestureHandlerRootView style={styles.container}>
        <Animated.View style={styles.circle}>
                <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <Animated.View style={[styles.figure, rStyle]}/>
                </PanGestureHandler>
        </Animated.View>
    </GestureHandlerRootView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    figure: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'rgba(0, 0, 256, 0.5)',
        borderRadius: 20,
    },
    circle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: CIRCLE_RADIUS,
        borderColor: 'rgba(0, 0, 256, 0.5)',
        borderWidth: 5,

    }
})