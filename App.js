import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from './src/colors';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {

    const Stack = createNativeStackNavigator();
    const navigator_options = {
        headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.background,
          headerTitleStyle: {
            fontWeight: 'bold',
        },
          headerTitleAlign: 'center',
          animation: 'slide_from_bottom',
    };
    const home_header_options = {
        title: 'Inicio',
        headerShown: false,
    };
    

  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName='Home' screenOptions={navigator_options}>
            <Stack.Screen 
                name="Home" 
                options={home_header_options}  
                component={Home}
            />
            {/* <Stack.Screen name="Game" component={Game} options={{headerShown: false}} />
            <Stack.Screen name="GameMult" component={GameMult} options={{headerShown: false}} />
            <Stack.Screen name="Rooms" component={Rooms} options={{headerShown: false}} />
            <Stack.Screen name="Score" component={Score} options={{headerShown: false}} />
            <Stack.Screen name="Options" component={Options} options={{title: 'Opções'}} /> */}
        </Stack.Navigator>
        </NavigationContainer>
  );
}
