import React from 'react'
import { View } from 'react-native'

// navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// custom components
import DrugstoreDetail from './src/components/DrugstoreDetail'
import DrugstoresList from './src/components/DrugstoresList'
import Loading from './src/components/Loading'

// styles
import { colors } from './theme'


const AppStack = createStackNavigator()


export default function Routes() {

    function cardOverlay() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.secondary }} >
                <Loading />
            </View>
        )
    }

	return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false ,
                    cardOverlay: cardOverlay
                }}

            >
                <AppStack.Screen name="DrugstoresList" component={ DrugstoresList } />
                <AppStack.Screen name="DrugstoreDetail" component={ DrugstoreDetail } />
            </AppStack.Navigator>
        </NavigationContainer>
	)
}
