import * as React from 'react';

import { View, Text, ScrollView, Animated, StyleSheet, Button } from 'react-native';

import useAnimatedHeaderTitle from './useAnimatedTitle';


export default function Home({ navigation }) {

    // animacja przeskakiwania tytu³u strony na pasek nawigacji 
    const { scrollY } = useAnimatedHeaderTitle({ title: 'Home Page', triggerPoint: 50});

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
    )
    // -------
    return (
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>

            <View style={{ flex: 1, height: 150}}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 16, paddingTop: 30, color:'#3362AB' }}>Home Page</Text>
            </View>


            <View style={styles.container}>
                <Button color='#fff' title={"Test #1 \n \n lorem ipsum \n Press to take a test"} onPress={() => navigation.navigate("Test #1")} />
            </View>

            <View style={styles.container}>
                <Button color='#fff' title={"Test #2 \n \n lorem ipsum \n Press to take a test"} onPress={() => navigation.navigate("Test #2")} />
            </View>

            <View style={styles.container}>
                <Button color='#fff' title={"Test #3 \n \n lorem ipsum \n Press to take a test"} onPress={() => navigation.navigate("Test #3")} />
            </View>

            <View style={styles.resultPage}>
                <Button color='#fff' title={"GET TO KNOW YOUR RESULTS!"} onPress={() => navigation.navigate("Results")}> </Button>
            </View>
            

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        fontSize: 150,
        backgroundColor: '#608CCF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,


    },
    resultPage: {
        height: 150,
        fontSize: 150,
        backgroundColor: '#3362AB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },

});

