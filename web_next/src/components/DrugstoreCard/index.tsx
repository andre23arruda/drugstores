import Link from '../Link'
import { DrugstoreProps } from '../../types/Drugstore'
import styles from './DrugstoreCard.module.scss'


export default function DrugstoreCard({ id, name, address, phone }: DrugstoreProps) {
	return (
		<Link
			className={ styles.drugstoreCard }
			href={`/drugstores/${ id }`}
		>
			<div>
				<p><strong>{ name }</strong></p>

				<p>{ address }</p>

				<p className={ styles.phone }>{ phone }</p>
			</div>
		</Link>
	)
}
