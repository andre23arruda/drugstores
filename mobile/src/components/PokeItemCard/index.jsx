import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

// custom components
import CustomText from '../CustomText'

// utils
import { getApi, itemImageLink, nullImageLink } from '../../services/api'
import { getEnglishText, removeHyphen } from '../../utils/formatString'
import { showAlert } from '../../utils/messages'

// styles
import styles from './styles'


function PokeItemCard({ item }) {

    const navigation = useNavigation()
    const [itemImage, setItemImage] = useState(`${ itemImageLink }/${ item.name }.png`)

    async function getDetail(item_name) {
        const response = await getApi(`item/${ item_name }`)
        try {
            if (response.id) {
				navigation.navigate('PokeItemDetail', {
					attributes: response.attributes,
                    category: response.category.name,
                    description: getEnglishText(response.flavor_text_entries).text,
                    effect: getEnglishText(response.effect_entries).effect,
					id: response.id,
					name: response.name,
                    image: `${ itemImageLink }/${ item.name }.png`,
				})
            } else {
                showAlert()
            }
        } catch(err) {
            showAlert()
        }
    }

	return (
        <TouchableOpacity
            style={ styles.informacao }
            activeOpacity={ 0.8 }
            onPress={ () => getDetail(item.name) }
        >
            <CustomText style={ styles.name }>
                { removeHyphen(item.name) }
            </CustomText>

            <Image
                style={ styles.image }
                source={{ uri: itemImage }}
                onError={ () => setItemImage(nullImageLink) }
            />
        </TouchableOpacity>
	)
}

export default PokeItemCard
