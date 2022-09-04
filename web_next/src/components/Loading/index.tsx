import styles from './Loading.module.scss'


export default function Loading() {
	return (
		<div className={ styles.loading }>
			<img src="/assets/images/loading.svg" alt="Loading Spinner" />
		</div>
	)
}
