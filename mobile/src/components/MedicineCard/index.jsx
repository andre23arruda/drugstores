import React from 'react'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'

// custom components
import CustomText from '../CustomText'

// styles
import styles from './styles'


function MedicineCard({ medicine }) {

	return (
        <View style={ styles.medicineCard }>
            <CustomText style={ styles.name }>
                { medicine.name }
            </CustomText>

            { medicine.in_stock ? (
                <Feather
                    name="check-circle"
                    size={ 28 }
                    color="green"
                />
                ) : (
                <Feather
                    name="x-circle"
                    size={ 36 }
                    color="#c60000"
                />
            )}
        </View>
	)
}

export default MedicineCard
