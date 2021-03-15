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

            <div className={styles.contact}>
                <a href="tel:+5511980927661" target="_blank">
                    (11) 98092-7661
                    <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/WhatsApp-Verde-PNG-150x150.png" width="22px" height="22px" alt=""/>
                </a>
            </div>
        </header>
    );
}