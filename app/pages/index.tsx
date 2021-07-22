import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medcloudbr - Home</title>
        <meta name="description" content="challenge two" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <main className={styles.main}>
        <h1>Seja bem vindo!</h1>
        <h2>Escolha o que deseja fazer</h2>
        <div className={styles.buttons}>
          <Link href="/insert">
            <a>inserir novo cliente</a>
          </Link>
          <Link href="/list">
            <a>listar todos cliente</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
