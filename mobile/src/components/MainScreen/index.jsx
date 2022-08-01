import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

// styles
import createStyle, { colors } from '../../../theme'

function MainScreen(props) {
	const styles = createStyle(props.backgroundColor)

	return (
		<View style={ styles.fill }>
			<StatusBar style="light" backgroundColor='transparent' />

            <Text style={{ marginTop: 10}}> </Text>

            { props.children }
		</View>
	)
}

export default MainScreen
