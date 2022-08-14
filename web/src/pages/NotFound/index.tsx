import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'


export default function NotFound() {
    return (
        <div className={ styles.NotFound }>
            <div className={ styles.err }>404</div>

            <div className={ styles.msg }>
                Oops, parece que essa página não existe!
                <p>
                    Deseja <Link to="/">voltar</Link>?
                </p>
            </div>
        </div>
    )
}
