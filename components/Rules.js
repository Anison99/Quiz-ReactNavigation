import React, { useState } from 'react';

import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Home from '../components/Home';



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

            <Button color='#608CCF' title={"chuj"} onPress={() => { <Home />}}></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        bacgroundColor: '#fff',
        alginItems: 'center'
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 16,
        paddingTop: 80,
        color: '#3362AB'
    },
    rulesHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 16,
        paddingTop: 50,
        color: '#000000'
    },
    rulesPoints: {
        fontSize: 18,
        marginLeft: 16,
        paddingTop: 50,
        color: '#000000'
    },
    buttonStyles: {
        backgroundColor: '#608CCF',
        
    }


});