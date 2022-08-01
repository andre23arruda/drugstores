import LoadingImg from '../../assets/images/loading.svg'
import styles from './Loading.module.scss'


export default function Loading() {
	return (
		<div className={ styles.loading }>
			<img src={ LoadingImg } alt="Loading Spinner" />
		</div>
	)
}
