import React, { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Feather } from '@expo/vector-icons'

// custom components
import CustomText from '../CustomText'


// styles
import styles from './styles'


function Header({ children, back }) {

    const navigation = useNavigation()

    function goBack() {
        navigation.goBack()
    }

	return (
        <View style={ styles.header }>
            { back && (
                <Feather
                    name="arrow-left"
                    size={ 28 }
                    color="white"
                    onPress={ goBack }
                />
            )}

            <CustomText style={ styles.headerText }>
                { children }
            </CustomText>
        </View>
	)
}

export default Header
