import { useRouter } from 'next/router'
import Medicines from '../../src/screens/Medicines/index'

export default function DrugstoreDetail() {
	const router = useRouter()
	return <Medicines id={ router.query.id } />
}
