import React from 'react'
import AppLoading from 'expo-app-loading'

import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins'

import Routes from './routes'


export default function App() {

	let [fontsLoaded] = useFonts({
		Poppins: Poppins_400Regular,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}

	return <Routes />
}
