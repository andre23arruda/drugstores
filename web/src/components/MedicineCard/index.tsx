import { MedicineProps } from 'types/Medicine'

import check from '../../assets/images/check-green.svg'
import cross from '../../assets/images/cross-red.svg'
import styles from './MedicineCard.module.scss'

export default function MedicineCard({ name, in_stock, drugstore }: MedicineProps) {
	function showMessage() {
		const message = `Medicamento ${ name } ${ in_stock ? ''  : 'não ' } está disponível em ${ drugstore.name }`
		alert(message)
	}

	return (
		<div className={ styles.medicineCard } onClick={ showMessage }>
			<p>{ name }</p>

			{ in_stock ? (
				<img src={ check } width="30" alt="In stock" />
				) : (
				<img src={ cross } width="30" alt="No stock" />
			)}
			{ }
		</div>
	)
}
