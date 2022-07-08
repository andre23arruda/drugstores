import React, { useState } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { useRoute } from '@react-navigation/core'

// custom components
import CustomText from '../CustomText'

// utils
import { removeHyphen, removeNewLine } from '../../utils/formatString'

// styles
import styles from './styles'
import { colors } from '../../../theme'
import { nullImageLink } from '../../services/api'


function PokeItemDetail() {
    const route = useRoute()
    const item = route.params

    const [itemImage, setItemImage] = useState(item.image)


	return (
        <ScrollView style={ [styles.detail, { backgroundColor: colors.claro }] }>
            <View style={ styles.top }>
                <Image
                    style={ styles.image }
                    source={{ uri: itemImage }}
                    onError={ () => setItemImage(nullImageLink) }
                />

                <CustomText style={ styles.name }>
                    { removeHyphen(item.name) }
                </CustomText>
            </View>

            <View style={ styles.types }>
                <CustomText style={ [styles.typeValue, styles.titleCase] } >
                    { removeHyphen(item.category) }
                </CustomText>
            </View>

            <CustomText style={ styles.description }>
                { removeNewLine(item.description) }
            </CustomText>

            <View style={ styles.block }>
                <CustomText style={ styles.paddingBottom }>
                    Effect:
                </CustomText>

                <CustomText style={ styles.effect }>
                    { removeNewLine(item.effect) }
                </CustomText>
            </View>

            <View style={[ styles.block, styles.lastBlock ]}>
                <CustomText style={ styles.paddingBottom }>
                    Attributes:
                </CustomText>

                { item.attributes.map((item) => (
                    <CustomText
                        key={ item.name }
                        style={ styles.titleCase }
                    >
                        » { removeHyphen(item.name) }
                    </CustomText>
                ))}
            </View>
        </ScrollView>
	)
}

export default PokeItemDetail
