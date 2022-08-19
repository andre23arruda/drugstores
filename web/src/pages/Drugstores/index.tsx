import { useEffect, useState } from 'react'

import DrugstoreCard from 'components/DrugstoreCard'
import { DrugstoreProps } from 'types/Drugstore'
import Header from 'components/Header'
import Loading from 'components/Loading'
import { getApi } from 'services/api'

import styles from './Drugstores.module.scss'

export default function Drugstores() {
    const [drugstores, setDrugstores] = useState<DrugstoreProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMedicines() {
            const { data } = await getApi(`api/drugstores`)
            setDrugstores(data)
            // setLoading(false)
        }
        loadMedicines()
    }, [])

    return (
        <div className={ styles.drugstoresPage }>
            <Header title="Farmácias" />

            <main>
                { loading && <Loading /> }

                { drugstores.map(drugstore => (
                    <DrugstoreCard
                        key={ drugstore.id }
                        {...drugstore}
                    />
                ))}
            </main>
        </div>
    )
}
