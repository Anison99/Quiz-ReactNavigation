import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TestRandom = ({ data }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const checkAnswer = (selectedAnswer, correctAnswer, task) => {
        if (selectedAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log('Incorrect.');
        }
    };

    return (
        <View>
            <Text style={styles.headerStyle}>{data.name}</Text>
            {data.tasks.map((task, taskIndex) => (
                <View key={taskIndex} style={styles.taskContainer}>
                    <Text style={styles.taskNumber}>{taskIndex + 1}</Text>
                    <View style={styles.taskTextContainer}>
                        <Text style={styles.taskText}>{task.question}</Text>
                        {task.answers.map((answer, answerIndex) => (
                            <TouchableOpacity
                                key={answerIndex}
                                style={styles.answerContainer}
                                onPress={() => setSelectedAnswer(answerIndex)}
                            >
                                <Text style={styles.answerText}>asdf{task.answers[answerIndex].text}</Text>
                            </TouchableOpacity>

                        ))}
                    </View>
                </View>
            ))}
            <TouchableOpacity style={styles.buttonStyle} onPress={() => checkAnswer(selectedAnswer, task.correctAnswer, task)}>
                <Text style={styles.textStyle}>Submit</Text>
            </TouchableOpacity>

        </View>
    );
};

export default TestRandom;

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    taskContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    taskNumber: {
        width: 30,
        fontSize: 16,
        fontWeight: 'bold',
    },
    taskTextContainer: {
        flex: 1,
        marginLeft: 10,
    },
    taskText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
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
})

