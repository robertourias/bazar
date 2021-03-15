import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
        <h1>Meu bazar online</h1>
        <p>
          As imagens dos produtos no site Tudo Serve são meramente ilustrativas. As vendas estão condicionadas à presença do público em uma de nossas lojas físicas, cabendo ao comprador a livre opção de compra.
        </p>

        <section className={styles.products}>
          {[{id: 0}, {id: 1}, {id: 2}, {id: 4}, {id: 5}, {id: 6}].map((index) => {
            return (
              <div className={styles.product}>
                <img src="https://ceak.org.br/tudoserve/wp-content/uploads/2016/07/aparelhos-de-som-usados-em-campinas-300x300.jpg" alt="" className={styles.thumb}/>
                <h3 className={styles.name}>Nome do produto</h3>
                <p className={styles.resume}>Resumo com detalhes básicos</p>
                <p className={styles.value}>R$ 30,00</p>
                <a href="" className={styles.btnReservation}>
                  Faça a sua reserva
                  <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/WhatsApp-Verde-PNG-150x150.png" alt="Whatsapp"/>
                </a>
              </div>
            );
          })} 
        </section>
    </Layout>
  )
}
