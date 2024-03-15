import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import HomeScreen from './screens/HomeScreen'
import { RootStackParamList } from './screens/type'
import Detail from './screens/Detail'
import Notification from './screens/Notification'

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Overview' }}
          />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
