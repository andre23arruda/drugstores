import React from 'react'
import { Text } from 'react-native'
import styles from './styles'


function CustomText(props) {
	return <Text style={ [props.style, styles.text] }>{ props.children } </Text>
}

export default CustomText
