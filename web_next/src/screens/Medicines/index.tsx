import { useEffect, useState } from 'react'

// custom components
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import MedicineCard from '../../components/MedicineCard'
import NotFound from '../../screens/NotFound'
import PageTitle from '../../components/Title'

// utils
import { getApi } from '../../services/api'

// types
import { DrugstoreProps } from '../../types/Drugstore'
import { MedicineProps, MedicinesListProps } from '../../types/Medicine'

// styles
import styles from './Medicines.module.scss'

// import { medicines } from '../../mocks/medicines'

type ScreenProps = {
    id: string | string[]
}

function stringNormalize(text: string) {
    let lowText = text.toLowerCase().trim()
    return lowText.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function Medicines({id}: ScreenProps) {
    const [medicines, setMedicines] = useState<MedicineProps[]>([])
    const [drugstore, setDrugstore] = useState<DrugstoreProps | null>(null)
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('')

    function filterMedicines(newSearchText: string) {
        setSearchText(newSearchText.trim())
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        async function loadDrugstore() {
            const { data } = await getApi(`api/drugstores/${ id }`)
            setDrugstore(data)
            setLoading(false)
        }

        async function loadMedicines() {
            const { data, status } = await getApi(`api/medicines?drugstore=${ id }`)
            if (status >= 400) {
                setLoading(false)
                return
            } else {
                setMedicines(data)
                loadDrugstore()
            }
        }

        if (id)
            loadMedicines()
    }, [id])

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

    if (loading) {
        return (
            <>
                <PageTitle>Medicamentos | Tem medicamento?</PageTitle>
                <Loading />
            </>
        )
    } else if (!drugstore && !loading ) {
        return <NotFound />
    }

    return (
        <div className={ styles.medicinesPage }>
            <PageTitle>Medicamentos | Tem medicamento?</PageTitle>

            <Header
                title="Medicamentos"
                hasInput={ true }
                searchText={ searchText }
                onChangeInput={ filterMedicines }
            />

            <main>
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
            </main>

            <Footer />
        </div>
    )
}
