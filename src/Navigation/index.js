import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import CallScreen from '../screens/CallScreen'
import CallingScreen from '../screens/CallingScreen'
import ContactScreen from '../screens/ContactScreen'
import IncomingCall from '../screens/IncomingCall'




const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Contacts" component={ ContactScreen } />
        <Stack.Group screenOptions={{headerShown:false}}>
          <Stack.Screen name="CallScreen" component={ CallScreen } />
          <Stack.Screen name="CallingScreen" component={ CallingScreen } />
          <Stack.Screen name="IncomingCall" component={ IncomingCall } />
        </Stack.Group>
      </Stack.Navigator>

    </NavigationContainer>
  )
}
const styles = StyleSheet.create({})
export default Navigation