import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'


export default function NotFound() {
    return (
        <div className={ styles.NotFound }>
            <div className={ styles.err }>404</div>

            <div className={ styles.msg }>
                Maybe this page moved or got deleted?
                <p>
                    Let's go <Link to="/">home</Link> and try from there.
                </p>
            </div>
        </div>
    )
}
