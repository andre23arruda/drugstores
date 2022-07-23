import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/core'

// custom components
import Header from '../Header'
import MainScreen from '../MainScreen'
import MedicineCard from '../MedicineCard'

// styles
import { colors } from '../../../theme'
import styles from './styles'
import CustomText from '../CustomText'

function stringNormalize(text) {
    let lowText = text.toLowerCase().trim()
    return lowText.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}


function DrugstoreDetail() {
    const route = useRoute()
    const { medicines } = route.params
    const [filteredMedicines, setFilteredMedicines] = useState(medicines)
    const [searchText, setSearchText] = useState('')

    function filterMedicines(newSearchText) {
        setSearchText(newSearchText)
        if (newSearchText) {
            const currentMedicines = medicines.filter(
                medicine => stringNormalize(medicine.name).includes(stringNormalize(newSearchText))
            )
            setFilteredMedicines(currentMedicines)
        } else {
            setFilteredMedicines(medicines)
        }
    }

	return (
        <MainScreen backgroundColor={ colors.default }>
            <Header back={ true }>Medicamentos</Header>

            <View style={ styles.searchContainer } >
                <TextInput
                    placeholder="Buscar..."
                    style={ styles.searchInput }
                    value={ searchText }
                    // onChangeText={ event => filteredMedicines(event) }
                    onChangeText={ value => filterMedicines(value) }
                />

                <Feather
                    name="search"
                    size={ 22 }
                    style={ styles.searchIcon }
                />
            </View>

            { filteredMedicines.length ? (
                <FlatList
                    contentContainerStyle={ styles.medicinesList }
                    data={ filteredMedicines }
                    keyExtractor={ item => String(item.id) }
                    numColumns={ 1 }
                    removeClippedSubviews={ true }
                    renderItem={ ({ item }) => <MedicineCard medicine={ item } /> }
                    showsVerticalScrollIndicator={ false }
                />
            ) : (
                <View style={ styles.noMedicines }>
                    <CustomText style={ styles.noMedicinesText }>
                        Não há medicamentos com esse nome...
                    </CustomText>
                </View>
            )}

        </MainScreen>
	)
}

export default DrugstoreDetail
