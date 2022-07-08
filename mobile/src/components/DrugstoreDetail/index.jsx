import React from 'react'
import { FlatList } from 'react-native'
import { useRoute } from '@react-navigation/core'

// custom components
import Header from '../Header'
import MainScreen from '../MainScreen'
import MedicineCard from '../MedicineCard'

// styles
import { colors } from '../../../theme'
import styles from './styles'


function DrugstoreDetail() {
    const route = useRoute()
    const { medicines } = route.params

	return (
        <MainScreen backgroundColor={ colors.default }>
            <Header back={ true }>Medicamentos</Header>

            <FlatList
                contentContainerStyle={ styles.medicinesList }
                data={ medicines }
                keyExtractor={ item => String(item.id) }
                numColumns={ 1 }
                removeClippedSubviews={ true }
                renderItem={ ({ item }) => <MedicineCard medicine={ item } /> }
                showsVerticalScrollIndicator={ false }
            />
        </MainScreen>
	)
}

export default DrugstoreDetail
