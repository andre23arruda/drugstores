import { useEffect, useState } from 'react'

// custom components
import DrugstoreCard from '../../components/DrugstoreCard'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import PageTitle from '../../components/Title'

// utils
import { getApi } from '../../services/api'

// types
import { DrugstoreProps } from '../../types/Drugstore'

// styles
import styles from './Drugstores.module.scss'

// import { drugstores } from '../../mocks/drugstores'

export default function Drugstores() {
    const [drugstores, setDrugstores] = useState<DrugstoreProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadDrugstores() {
            const { data } = await getApi(`api/drugstores`)
            setDrugstores(data)
            setLoading(false)
        }
        loadDrugstores()
    }, [])

    return (
        <div className={ styles.drugstoresPage }>
            <PageTitle>Farmácias | Tem medicamento?</PageTitle>

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

            <Footer />
        </div>
    )
}
