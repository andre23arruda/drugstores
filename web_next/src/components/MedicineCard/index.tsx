import { MedicineProps } from '../../types/Medicine'
import { getDateFormatJson } from '../../utils/date'

import styles from './MedicineCard.module.scss'

export default function MedicineCard({ name, in_stock, updated_at, drugstore }: MedicineProps) {
	function showMessage() {
		const message = `Medicamento ${ name } ${ in_stock ? ''  : 'não ' } está disponível em ${ drugstore.name }`
		alert(message)
	}

	return (
		<div className={ styles.medicineCard } onClick={ showMessage }>
			<div>
				<p>{ name }</p>

				{ in_stock ? (
					<img src="/assets/images/check-green.svg" width="30" alt="In stock" />
				) : (
					<img src="/assets/images/check-green.svg" width="30" alt="No stock" />
				)}
			</div>

			<span>
				Atualizado em: { getDateFormatJson(updated_at) }
			</span>
		</div>
	)
}
