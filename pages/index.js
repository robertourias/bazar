import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home({products}) {
  return (
    <Layout>
        <h1>Meu bazar online</h1>
        <p>
          As imagens dos produtos no site Tudo Serve são meramente ilustrativas. As vendas estão condicionadas à presença do público em uma de nossas lojas físicas, cabendo ao comprador a livre opção de compra.
        </p>

        <section className={styles.products}>
          {products.map((product) => {
            return (
              <div className={styles.product} key={product.id}>
                <img src={product.image} alt="" className={styles.thumb}/>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.resume}>{product.resume}</p>
                <p className={styles.value}>R$ {product.price}</p>
                {product.inventory === 1 ? (
                  <a 
                    href={`https://api.whatsapp.com/send?l=pt-BR&phone=5511980927661&text=Gostaria%20de%20reservar%20o%20seguinte%20produto:%20`} 
                    className={styles.btnReservation}
                  >
                    Faça a sua reserva
                    <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/WhatsApp-Verde-PNG-150x150.png" alt="Whatsapp" />
                  </a>
                ) : (
                  <span className={styles.btnReservation + styles.btnDisabled}>
                    Produto vendido
                  </span>
                )}
              </div>
            );
          })} 
        </section>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const response = await axios.get('http://localhost:3000/api/products');
  const { products } = await response.data;
  return { props: { products } };
};