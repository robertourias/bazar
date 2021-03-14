import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meu bazar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <Link href="/">
          <a>Meu Bazar</a>
        </Link>

        <ul className="nav">
          <li>
            <Link href="/"><a>Produtos</a></Link>
          </li>
          <li>
            <Link href="/"><a>Livros</a></Link>
          </li>
        </ul>

        <fieldset className="search">
          <input type="text"/>
          <a href="/" className="btn-search">Buscar</a>
        </fieldset>
      </header>

      <main className="main">
        <h1>Meu bazar online</h1>
        <p>
          As imagens dos produtos no site Tudo Serve são meramente ilustrativas. As vendas estão condicionadas à presença do público em uma de nossas lojas físicas, cabendo ao comprador a livre opção de compra.
        </p>

        <section className="products">
          {/* {[{id: 0}, {id: 1}, {id: 2}].map((index) => {
            return ( */}
              <div className="product">
                <img src="" alt="" className="thumb"/>
                <h3 className="name">Nome</h3>
                <p className="resume">Resumo</p>
                <p className="value">Valor</p>
                <a href="" className="btn-reservation">Faça a sua reserva</a>
              </div>
            {/* );
          })} */}
        </section>
      </main>      

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
