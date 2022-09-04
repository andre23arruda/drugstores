import React from 'react'
import Link from '../Link'
import styles from './Header.module.scss'

type HeaderProps = {
    title: string,
    hasInput?: boolean,
    searchText?: string,
    onChangeInput?: (text: string) => void
}

export default function Header({ title, hasInput, searchText, onChangeInput }: HeaderProps) {
    return (
        <div className={ styles.headerContainer }>
            <header className={ styles.header }>
                <Link href="/">
                    <img
                        src="/assets/images/logo.svg"
                        alt="App logo"
                    />
                </Link>

                <h1>{ title }</h1>

                <div className={ styles.inputContainer }>
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
                </div>
            </header>
        </div>
    )
}
