
   
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {  SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import { RootStackParamList, ROUTES } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, ROUTES.Home>

export const Home = ({navigation}: Props) => {

    const pages: string[] = ['First Animation']

    return <SafeAreaView style={styles.container}>
     {pages.map((page: string, index: number) => {
         return <TouchableOpacity key={index}>
             <Text style={styles.box} onPress={() => navigation.navigate(ROUTES.FirstAnimation)}>{page}</Text>
         </TouchableOpacity>
     })}
 </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    box: {
        fontSize: 20,
        borderWidth: 2,
        marginVertical: 10,
        padding: 5,
    }
})