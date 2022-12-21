import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, StyleSheet, Button } from 'react-native'
import { COLORS, SIZES } from '../constants';
import data from '../mechanics/QuizDataFirst';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




export default function TestRandom() {
    const [data, setData] = useState([]);
    const [randomItem, setRandomItem] = useState(null);

    useEffect(() => {
        // Pobierz dane z linku za pomoc¹ metody GET
        fetch('https://tgryl.pl/quiz/tests')
            .then(response => response.json())
            .then(json => {
                // Przetwórz dane i ustaw je w stanie komponentu
                setData(json);
            });

    }, []);

    const getRandomIndex = array => Math.floor(Math.random() * array.length); // Funkcja do generowania losowego indeksu tablicy
    const getRandomItem = array => array[setData(json)]; // Funkcja do pobierania losowego obiektu z tablicy

    // Funkcja do wyœwietlania losowego obiektu
    const displayRandomItem = () => {
        const item = getRandomItem(data); // Pobierz losowy obiekt z tablicy
        setRandomItem(item);// Ustaw losowy obiekt w stanie komponentu
    };

    
   
   
    return (
        <View>
            
        </View>
           
        )
    }
   

