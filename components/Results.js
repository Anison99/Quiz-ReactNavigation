import React, { useState, useEffect } from 'react';

import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';


export default function Results() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            date + '/' + month + '/' + year
            
        );
    }, []);

    return (
        <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title>Nick</DataTable.Title>
                <DataTable.Title>Point</DataTable.Title>
                <DataTable.Title>Type</DataTable.Title>
                <DataTable.Title>Date</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
                <DataTable.Cell>Radhika</DataTable.Cell>
                <DataTable.Cell>10/10</DataTable.Cell>
                <DataTable.Cell>Test #1</DataTable.Cell>
                <DataTable.Cell>{currentDate}</DataTable.Cell>

            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>Krishna</DataTable.Cell>
                <DataTable.Cell>5/10</DataTable.Cell>
                <DataTable.Cell>Test #1</DataTable.Cell>
                <DataTable.Cell>{currentDate}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Vanshika</DataTable.Cell>
                <DataTable.Cell>2/10</DataTable.Cell>
                <DataTable.Cell>Test #1</DataTable.Cell>
                <DataTable.Cell>{currentDate}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
                <DataTable.Cell>Teena</DataTable.Cell>
                <DataTable.Cell>9/10</DataTable.Cell>
                <DataTable.Cell>Test #1</DataTable.Cell>
                <DataTable.Cell>{currentDate}</DataTable.Cell>
            </DataTable.Row>
        </DataTable> 
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
});


