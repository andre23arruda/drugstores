import { Link } from 'react-router-dom'
import { DrugstoreProps } from 'types/Drugstore'
import styles from './DrugstoreCard.module.scss'


export default function DrugstoreCard({ id, name, address, phone }: DrugstoreProps) {
	return (
		<Link
			className={ styles.drugstoreCard }
			to={`/drugstores/${ id }`}
			state={{name, address, phone}}
		>
			<div>
				<p><strong>{ name }</strong></p>

				<p>{ address }</p>

				<p className={ styles.phone }>{ phone }</p>
			</div>
		</Link>
	)
}
