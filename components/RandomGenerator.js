import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, StyleSheet, Button, FlatList, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const testLinks = [
     'https://tgryl.pl/quiz/test/62032610069ef9b2616c761e',
     'https://tgryl.pl/quiz/test/62032610069ef9b2616c761c' ,
     'https://tgryl.pl/quiz/test/62032610069ef9b2616c761d' ,
     'https://tgryl.pl/quiz/test/62032610069ef9b2616c761b', 
];

const RandomGenerator = ({navigation }) => {
    const [selectedTestLink, setSelectedTestLink] = useState(null);
    const [selectedTest, setSelectedTest] = useState(null);

    function selectRandomTestLink() {
        const randomIndex = Math.floor(Math.random() * testLinks.length);
        const testLink = testLinks[randomIndex];
        setSelectedTestLink(testLink);
    }

    async function fetchTestDetails() {
        try {
            const response = await axios.get(selectedTestLink);
            const test = response.data;
            const name = test.name;
            const description = test.description;
            const level = test.level;
            const selectedTest = { name, description,level }; // pobieranie danych z wygenerowanego linku 
            setSelectedTest(selectedTest);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ScrollView backgroundColor={COLORS.primary}>
                {selectedTestLink ? (
                <View backgroundColor={COLORS.primary}>
                    <TouchableOpacity onPress={fetchTestDetails} style={{marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5}}>
                        <Text style={{ fontSize: 20, color: COLORS.white, textAlign: 'center' }}>Click to check details</Text>
                        </TouchableOpacity>
                        {selectedTest ? (
                        // <Text>Szczegó³y testu: {JSON.stringify(selectedTest)}</Text>
                        <Text style={{ fontSize: 20, color: COLORS.white }}>DETAILS: {"\n"}Topic: {selectedTest.name},{"\n"}Level: {selectedTest.level}, {"\n"}Description:{selectedTest.description}</Text>
                        ) : null}
                    </View>
                ) : (
                    <TouchableOpacity style={{ marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5 }} onPress={selectRandomTestLink} >
                        <Text style={{ fontSize: 20, color: COLORS.white, textAlign: 'center' }}>GENERATE TEST</Text>
                    </TouchableOpacity>
            )}
        </ScrollView>
    );


      // -------------- METODY POMOCNICZE -------------------

};

export default RandomGenerator;
