import { StyleSheet, Text, View, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import ResturamtScreen from './src/screens/ResturamtScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown:false}}>
            {(props) => <Home {...props} title="Home" />}
          </Stack.Screen>
          <Stack.Screen name="ResturamtScreen" options={{headerShown:false}}>
            {(props) => <ResturamtScreen {...props} title="ResturamtScreen" />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({

});
