import React, { useState } from 'react';

import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { storeData, getItemFor } from './storageHelper';
import Rules from '../components/Rules';
import Home from '../components/Home';

export default function HelloScreen({ navigation }) {
    
    
    return (
        <View style={styles.container}>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        bacgroundColor: '#fff',
        alginItems: 'center'
    },
    
});
