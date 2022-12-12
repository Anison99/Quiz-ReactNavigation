import React, { useState, useEffect } from 'react';

import { StyleSheet, RefreshControl, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { COLORS, SIZES } from '../constants';


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

    const users = [

            { key: '1', name: 'Alice'},
            { key: '2', name: 'Bob' },
            { key: '3', name: 'Charlie' },
            { key: '4', name: 'David' },
            { key: '5', name: 'Emily' }, 
    ];

    const points = [
        { key: '1', point: '3' },
        { key: '2', point: '4' },
        { key: '3', point: '6' },
        { key: '4', point: '9' },
        { key: '5', point: '10' },
    ];

    const testType = [
        { key: '1', test: '1' },
        { key: '2', test: '1' },
        { key: '3', test: '3' },
        { key: '4', test: '2' },
        { key: '5', test: '1' },
    ];

    const solveDate = [
        { key: '1', date: '11-12-2022' },
        { key: '2', date: '15-02-2022' },
        { key: '3', date: '17-11-2022' },
        { key: '4', date: '11-10-2022' },
        { key: '5', date: '04-03-2022' },
    ];
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        // refresh data here
        setRefreshing(false);
    };
    
    return (
        <View style={{ backgroundColor: COLORS.primary }}>
        <DataTable >
            <DataTable.Header style={{ backgroundColor: COLORS.secondary, }}>
                <DataTable.Title>Nick</DataTable.Title>
                <DataTable.Title>Points</DataTable.Title>
                <DataTable.Title>Test Type</DataTable.Title>
                <DataTable.Title>Date</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell>{users[0].name}</DataTable.Cell>
                <DataTable.Cell>{points[0].point} /10</DataTable.Cell>
                <DataTable.Cell>{testType[0].test}</DataTable.Cell>
                <DataTable.Cell>{solveDate[0].date}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>{users[1].name}</DataTable.Cell>
                <DataTable.Cell>{points[1].point} /10</DataTable.Cell>
                <DataTable.Cell>{testType[1].test}</DataTable.Cell>
                <DataTable.Cell>{solveDate[1].date}</DataTable.Cell>


            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>{users[2].name} </DataTable.Cell>
                <DataTable.Cell>{points[2].point} /10</DataTable.Cell>
                <DataTable.Cell>{testType[2].test}</DataTable.Cell>
                <DataTable.Cell>{solveDate[2].date}</DataTable.Cell>

            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>{users[3].name}</DataTable.Cell>
                <DataTable.Cell>{points[3].point} /10</DataTable.Cell>
                <DataTable.Cell>{testType[3].test}</DataTable.Cell>
                <DataTable.Cell>{solveDate[3].date}</DataTable.Cell>

            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>{users[4].name}</DataTable.Cell>
                <DataTable.Cell>{points[4].point} /10</DataTable.Cell>
                <DataTable.Cell>{testType[4].test}</DataTable.Cell>
                <DataTable.Cell>{solveDate[4].date}</DataTable.Cell>
            </DataTable.Row>   
            </DataTable>
        </View>
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


