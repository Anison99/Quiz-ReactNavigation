import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';


import Home from './components/Home';
import TestOne from './components/TestOne';
import TestTwo from './components/TestTwo';
import TestThree from './components/TestThree';
import Results from './components/Results';
import HelloScreen from './mechanics/HelloScreen';
import Rules from './components/Rules';

const HAS_LAUNCHED = 'HAS_LAUNCHED';

const Stack = createStackNavigator(); // zainicjowanie górnnego paska nawigacji
 

const App = () => {
    const [hasLaunched, setHasLaunched] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const hasLaunched = await getItemFor(HAS_LAUNCHED);
            if (hasLaunched) {
                setHasLaunched(true);
            }
            else {
                await storeData(HAS_LAUNCHED, "true");
            }
        };

        getData().catch((error) => { console.log(error) })
    }, [])
   return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Rules">
                
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
                
                <Stack.Screen
                    name="Rules"
                    component={Rules}
                />
                

            </Stack.Navigator>
            
        </NavigationContainer>
    );
     
}

export default App;
