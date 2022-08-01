import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import Header from 'components/Header'
import Loading from 'components/Loading'
import MedicineCard from 'components/MedicineCard'
import NotFound from 'pages/NotFound'
import { MedicineProps } from 'types/Medicine'
import { getApi } from 'services/api'

import styles from './Medicines.module.scss'

function stringNormalize(text: string) {
    let lowText = text.toLowerCase().trim()
    return lowText.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function Medicines() {
    const [medicines, setMedicines] = useState<MedicineProps[]>([])
    const [filteredMedicines, setFilteredMedicines] = useState<MedicineProps[]>([])
    const [drugstore, setDrugstore] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('')

    const { id } = useParams()
    const { state } = useLocation()

    function filterMedicines(newSearchText: string) {
        setSearchText(newSearchText)
        if (newSearchText) {
            const currentMedicines = medicines.filter(
                medicine => stringNormalize(medicine.name).includes(stringNormalize(newSearchText))
            )
            setFilteredMedicines(currentMedicines)
        } else {
            setFilteredMedicines(medicines)
        }
        window.scrollTo(0, 0)
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
                setFilteredMedicines(data)
                loadDrugstore()
            }
        }

        loadMedicines()
        console.group(loading)
    }, [id, state])

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
                        { filteredMedicines.length ? (
                            <>
                                { filteredMedicines.map(medicine => (
                                    <MedicineCard
                                        key={ medicine.id }
                                        {...medicine}
                                        drugstore={ drugstore }
                                    />
                                ))}
                            </>
                        ) : (
                            <h1>Não há medicamentos com esse nome...</h1>
                        )}
                    </>
                )}
            </main>
        </div>
    )
}
