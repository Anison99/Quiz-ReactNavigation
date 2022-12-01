import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';


export default function TestTwo() {
    const [counter, setCounter] = React.useState(10);
    const [count, setCount] = useState(0);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);


    return (
        <View style={styles.cardContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <Text style={styles.header}>Question {count} of 10</Text>
                <Text style={styles.header}>Time {counter} </Text>
            </View>


            <View>
                <Text style={styles.question} >This is example of test question. Do you know answer?</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button style={styles.buttonStyle} title={"A. Answer 1"} />
                <Button style={styles.buttonStyle} title={"B. Answer 2"} />
                <Button style={styles.buttonStyle} title={"C. Answer 3"} />
                <Button style={styles.buttonStyle} title={"D. Answer 4"} />

            </View>

            <View style={styles.buttonContainer}>
                <Button style={styles.buttonStyle, { fontSize: 40 }} onPress={() => { setCount(count + 1) }} title="NEXT" />
                {/*  
                 *  <Button onPress={() => { setCount(0) }} title="Reset"/>
                 */ }
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    header: {
        color: '#3362AB',
        fontSize: 20
    },
    question: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 16
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 80
    },
    buttonStyle: {
        flex: 1,

    },

});
