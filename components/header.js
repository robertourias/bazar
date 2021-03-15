import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">
                    <a className={styles.logo}>Meu Bazar</a>
                </Link>

                <ul className={styles.menu}>
                    <li>
                        <Link href="/"><a>Produtos</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Livros</a></Link>
                    </li>
                </ul>
            </nav>

            <fieldset className={styles.search}>
                <input type="text" placeholder="Pesquise aqui"/>
                <a href="/" className={styles.btnSearch}>Buscar</a>
            </fieldset>
        </header>
    );
}