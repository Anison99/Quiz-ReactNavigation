import React, { useState } from 'react';

import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants';


export default function Rules({ navigation }) {
    

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Wellcome!</Text>
            <Text style={styles.rulesHeader}>RULES</Text>
            <Text style={styles.rulesPoints}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum iaculis tincidunt. Aliquam placerat feugiat turpis quis dictum. Duis nisi orci, efficitur sit amet magna ut, iaculis interdum justo. Vestibulum iaculis ligula ut risus egestas, et venenatis nunc tincidunt. 
            </Text>
            <Text style={styles.rulesPoints}>
                Nullam ac sem lacinia neque convallis luctus vitae eu massa. Mauris viverra tortor quis placerat luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi quam, tincidunt id eros ut, vestibulum dignissim nisi. Nulla vehicula tincidunt felis vel sollicitudin. Quisque aliquam, felis in cursus auctor, urna est interdum lacus, et feugiat felis metus a odio.
            </Text>

            
            <TouchableOpacity
                onPress={() => navigation.reset({ routes: [{ name: 'Home' }] })}
                style={{marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5}}>
                <Text style={{ fontSize: 20, color: COLORS.white, textAlign: 'center' }}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        bacgroundColor: COLORS.primary,
        alginItems: 'center'
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 16,
        paddingTop: 40,
        color: COLORS.primary
    },
    rulesHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 16,
        paddingTop: 50,
        paddingBottom: 20,
        color: '#000000'
    },
    rulesPoints: {
        fontSize: 18,
        marginLeft: 16,
        paddingBottom: 20,
        color: '#000000'
    },
    buttonStyles: {
        backgroundColor: '#608CCF',
        
    }


});