/* Date      : 23-05-2021
/* Creator   : ABDUL BASITH A */
/* Email     : ambalavanbasith@gmail.com */
/* github    : abdulbasitha */
import React,{useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert
} from "react-native";
import { FloatingButton, Model } from "../../components";
import { theme } from "../../constants";
import OverView from './layout/OverView'
import ItemsView  from './layout/ItemsView'
const Home = () =>
{
    const [modelStatus , setModelStatus] = useState(false)
return (
    <View style={styles.container}>
        <View style={styles.statusContainer}>
            <OverView/>
        </View>
        <ScrollView style={styles.itemsContainer}>
            <ItemsView />
        </ScrollView >
        <FloatingButton onPress={()=>setModelStatus(!modelStatus)}/>
        <View></View>
        <Model
        title="Add Income/Expense"
        visible={modelStatus}
        onDismiss={()=>setModelStatus(false)}
        >
            <Text>Hello</Text>

        </Model>
    </View>
)}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    statusContainer: {

    },
    itemsContainer: {

    }
});