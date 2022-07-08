import React from 'react'

// navigation
import { createStackNavigator } from '@react-navigation/stack'

// custom components
import DrugstoreDetail from '../../components/DrugstoreDetail'
import DrugstoresList from '../../components/DrugstoresList'


const AppStack = createStackNavigator()


function Pokemons() {
	return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="DrugstoresList" component={ DrugstoresList } />
            <AppStack.Screen name="DrugstoreDetail" component={ DrugstoreDetail } />
        </AppStack.Navigator>
	)
}

export default Pokemons
