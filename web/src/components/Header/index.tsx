import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

type HeaderProps = {
    title: string,
    hasInput?: boolean,
    searchText?: string,
    onChangeInput?: (text: string) => void
}

export default function Header({ title, hasInput, searchText, onChangeInput }: HeaderProps) {
    return (
        <header className={ styles.header }>
            <Link to="/">
                <img
                    src="/assets/images/logo.svg"
                    alt="App logo"
                />
            </Link>

            <h1>{ title }</h1>

            { (hasInput && onChangeInput) ? (
                <input
                    id="search-medicine"
                    name="search-medicine"
                    placeholder="Buscar..."
                    type="text"
                    value={ searchText }
                    onChange={(event) => onChangeInput(event.target.value) }
                />
            ) : (
                <span></span>
            )}
        </header>
    )
}
