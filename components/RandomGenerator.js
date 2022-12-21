import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import TestRandom from './TestRandom';

const testLinks = [
    'https://tgryl.pl/quiz/test/62032610069ef9b2616c761e',
    'https://tgryl.pl/quiz/test/62032610069ef9b2616c761c',
    'https://tgryl.pl/quiz/test/62032610069ef9b2616c761d',
    'https://tgryl.pl/quiz/test/62032610069ef9b2616c761b',
];

const RandomGenerator = ({ navigation }) => {
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
            const tasks = test.tasks;
            const answer = test.answers;
            const selectedTest = { test, name, description, level, tasks, answer };
            setSelectedTest(selectedTest);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ScrollView>
            {selectedTestLink ? (
                <View>
                    <TouchableOpacity onPress={fetchTestDetails} style={styles.buttonStyle}>
                        <Text style={styles.textStyle}>Click to check details</Text>
                    </TouchableOpacity>
                    {selectedTest ? (
                        <Text style={styles.detailsStyle}>
                            DETAILS: {'\n'}Topic: {selectedTest.name},{'\n'}Level: {selectedTest.level}, {'\n'}Description:{selectedTest.description}
                        </Text>
                    ) : null}
                </View>
            ) : (
                    <TouchableOpacity style={styles.buttonStyle} onPress={selectRandomTestLink}>
                    <Text style={styles.textStyle}>GENERATE TEST</Text>
                </TouchableOpacity>
            )}
            {/* }
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Test Random')}>
                <Text style={styles.textStyle}>Move to test</Text>
            </TouchableOpacity>
            */}

            {selectedTest ? <TestRandom data={selectedTest} /> : null}
        </ScrollView>
    );
};

export default RandomGenerator;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    textStyle: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
    },
    detailsStyle: {
        margin: 10,
        fontSize: 16,
    },
});

