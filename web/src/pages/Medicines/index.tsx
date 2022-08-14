import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

// custom components
import Header from 'components/Header'
import Loading from 'components/Loading'
import MedicineCard from 'components/MedicineCard'
import NotFound from 'pages/NotFound'

// utils
import { getApi } from 'services/api'

// types
import { MedicineProps, MedicinesListProps } from 'types/Medicine'

// styles
import styles from './Medicines.module.scss'

function stringNormalize(text: string) {
    let lowText = text.toLowerCase().trim()
    return lowText.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function Medicines() {
    const [medicines, setMedicines] = useState<MedicineProps[]>([])
    const [drugstore, setDrugstore] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('')

    const { id } = useParams()
    const { state } = useLocation()

    function filterMedicines(newSearchText: string) {
        setSearchText(newSearchText.trim())
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        async function loadDrugstore() {
            if (state) {
                setDrugstore(state)
            } else {
                const { data } = await getApi(`api/drugstores/${ id }`)
                setDrugstore(data)
            }
            setLoading(false)
        }

        async function loadMedicines() {
            const { data, status } = await getApi(`api/medicines?drugstore=${ id }`)
            if (status === 200) {
                setMedicines(data)
                loadDrugstore()
            }
        }

        loadMedicines()
    }, [id, state])

    const filteredMedicines: MedicineProps[] = searchText.length > 0
        ? medicines.filter(
            medicine => stringNormalize(medicine.name).includes(stringNormalize(searchText))
        ) : []

    function CardsList({ list }: MedicinesListProps) {
        return (
            <>
                { list.map(medicine => (
                    <MedicineCard
                        key={ medicine.id }
                        {...medicine}
                        drugstore={ drugstore }
                    />
                ))}
            </>
        )
    }

    if (!drugstore && !loading ) {
        return (
            <NotFound />
        )
    }

    return (
        <div className={ styles.medicinesPage }>
            <Header
                title="Medicamentos"
                hasInput={ true }
                searchText={ searchText }
                onChangeInput={ filterMedicines }
            />

            <main>
                { loading ? (
                    <Loading />
                ) : (
                    <>
                        { !searchText.length ? (
                            <CardsList list={ medicines } />
                        ) : (
                            <>
                                { !filteredMedicines.length ? (
                                    <h1>Não há medicamentos com esse nome...</h1>
                                ) : (
                                    <CardsList list={ filteredMedicines } />
                                )}
                            </>
                        )}
                    </>
                )}
            </main>
        </div>
    )
}
