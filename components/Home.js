import React, { useEffect, useState } from 'react';

import { View, Text, ScrollView, Animated, StyleSheet, Button, TouchableOpacity } from 'react-native';

import useAnimatedHeaderTitle from './useAnimatedTitle';
import { COLORS, SIZES } from '../constants';




export default function Home({ navigation }) {

    // animacja przeskakiwania tytu³u strony na pasek nawigacji 
    const { scrollY } = useAnimatedHeaderTitle({ title: 'Home Page', triggerPoint: 50});

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
    )
    // -------
    

    return (
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16} backgroundColor={COLORS.primary}>

            <View style={{ flex: 1, height: 150}}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: 16, paddingTop: 30, color:'#fff' }}>Home Page</Text>
            </View>


            <View >
                <View style={styles.spaceButtons}>
                    <TouchableOpacity style={styles.container} color='#608CCF' onPress={() => navigation.navigate("Test #1")}>
                        <Text style={{ fontSize: 20, color: COLORS.white }}>Test #1 - general knowledge</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.spaceButtons}>
                    <TouchableOpacity style={styles.container} color='#608CCF' onPress={() => navigation.navigate("Test #2")}>
                        <Text style={{ fontSize: 20, color: COLORS.white }}>Test #2 - about countries</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.spaceButtons}>
                    <TouchableOpacity style={styles.container} color='#608CCF' onPress={() => navigation.navigate("Test #3")}>
                        <Text style={{ fontSize: 20, color: COLORS.white }}>Test #3 - food</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.spaceButtons}>
                    <TouchableOpacity style={styles.container} color='#608CCF' onPress={() => navigation.navigate("Results")}>
                        <Text style={{ fontSize: 20, color: COLORS.white }}>GET TO KNOW YOUR RESULTS!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: COLORS.secondary,
        backgroundColor: COLORS.accent + '20',
        height: 60,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    resultPage: {
        height: 150,
        fontSize: 150,
        backgroundColor: '#3362AB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },

    spaceButtons: {
        marginVertical: 10
    }

});

