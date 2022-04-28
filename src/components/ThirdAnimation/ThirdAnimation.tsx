import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { Page } from "./Page";


const WORDS = ['Schöner', 'Größer', 'Härter', 'Straffer', 'Glatter', 'Stärker']
 

export const ThirdAnimation = () => {
  const translateX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler((event) => {
      translateX.value = event.contentOffset.x
    })


      return <View style={styles.container}>
    <Animated.ScrollView horizontal scrollEventThrottle={16} onScroll={scrollHandler} pagingEnabled>
      {WORDS.map((word, index) => {
        return  <Page key={index} title={word} index={index} translateX={translateX}/>
      })}
    </Animated.ScrollView>
     </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})