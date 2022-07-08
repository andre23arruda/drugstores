import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

// custom components
import Header from '../Header'
import Loading from '../Loading'
import MainScreen from '../MainScreen'
import DrugstoreCard from '../DrugstoreCard'

// mocks
// import { drugstores } from '../../../mocks/drugstores'

// styles
import styles from './styles'
import { colors } from '../../../theme'

// utils
import { getApi } from '../../services/api'


function DrugstoresList() {
    const [drugstores, setDrugstores] = useState([])

    useEffect(() => {
        async function loadDrugstores() {
            const { data, status } = await getApi(`api/drugstores`)

            try {
                if (status === 200) {
                    setDrugstores(data)
                } else {
                    showAlert()
                }
            } catch(err) {
                showAlert()
            }
        }
        loadDrugstores()
    }, [])


	return (
		<MainScreen backgroundColor={ colors.default }>
            <Header>Selecione a farmácia para ver os medicamentos</Header>

            { drugstores.length ? (
                <FlatList
                    contentContainerStyle={ styles.drugstoresList }
                    data={ drugstores }
                    keyExtractor={ item => String(item.id) }
                    numColumns={ 1 }
                    removeClippedSubviews={ true }
                    renderItem={ ({ item }) => <DrugstoreCard drugstore={ item } /> }
                    showsVerticalScrollIndicator={ true }
                />
            ) : (
                <Loading />
            )}
        </MainScreen>
	)
}

export default DrugstoresList
