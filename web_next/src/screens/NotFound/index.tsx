// custom components
import Link from '../../components/Link'
import PageTitle from '../../components/Title'

// styles
import styles from './NotFound.module.scss'


export default function NotFound() {
    return (
        <div className={ styles.NotFound }>
            <PageTitle>404 - Not Found</PageTitle>
            <div className={ styles.err }>404</div>

            <div className={ styles.msg }>
                Oops, parece que essa página não existe!
                <p>
                    Deseja <Link href="/">voltar</Link>?
                </p>
            </div>
        </div>
    )
}
