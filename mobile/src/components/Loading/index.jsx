import React from 'react'
import { Image, View } from 'react-native'

import loading from '../../assets/loading-5.gif'
import styles from './styles'


function Loading() {
	return (
		<View style={ styles.loadingContainer }>
			<Image
				resizeMode="cover"
				source={ loading }
				style={ styles.image }
			/>
		</View>
	)
}

export default Loading
