
   
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {  SafeAreaView, StyleSheet, Text, TouchableOpacity} from "react-native";
import { ROUTES } from "../../constants";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, ROUTES.Home>

export const Home = ({navigation}: Props) => {

    const pages = [{path: ROUTES.FirstAnimation, name: 'First Animation'}, {path: ROUTES.SecondAnimation, name: 'Second Animation'}]

    return <SafeAreaView style={styles.container}>
     {pages.map((page, index) => {
         return <TouchableOpacity key={index}>
             <Text style={styles.box} onPress={() => navigation.navigate(page.path)}>{page.name}</Text>
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