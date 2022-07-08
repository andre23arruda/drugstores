import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

// custom components
import CustomText from '../CustomText'

// utils
import { getApi } from '../../services/api'
import { showAlert } from '../../utils/messages'

// styles
import styles from './styles'


function DrugstoreCard({ drugstore }) {

    const navigation = useNavigation()


    async function seeMedicines() {
        const { data, status } = await getApi(`api/medicines?drugstore=${ drugstore.id }`)
        console.log(status)

        try {
            if (status === 200) {
				navigation.navigate('DrugstoreDetail', {
					medicines: data,
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
            style={ styles.drugstoreCard }
            activeOpacity={ 0.8 }
            onPress={ seeMedicines }
        >
            <CustomText style={ styles.name }>
                { drugstore.name }
            </CustomText>

            <CustomText style={ styles.description }>
                Endereço: { drugstore.address }
            </CustomText>

            <CustomText style={ styles.description }>
                Medicamentos em estoque: { drugstore.stock }
            </CustomText>
        </TouchableOpacity>
	)
}

export default DrugstoreCard
