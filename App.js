import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button } from 'react-native';

import Home from './components/Home';
import TestOne from './components/TestOne';
import TestTwo from './components/TestTwo';
import TestThree from './components/TestThree';
import Results from './components/Results';


const Stack = createStackNavigator(); // zainicjowanie górnnego paska nawigacji

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen // top banner + drawer button
                    name="Home"
                    component={Home}
                    options={{
                        headerLeft: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="<"
                                color="#000000"   
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name="Test #1"
                    component={TestOne}
                />
                <Stack.Screen
                    name="Test #2"
                    component={TestTwo}
                />
                <Stack.Screen
                    name="Test #3"
                    component={TestThree}
                />
                <Stack.Screen
                    name="Results"
                    component={Results}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
