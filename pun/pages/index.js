import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Bienvenue dans PUN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <h1>Bienvenue dans PUN !</h1>
          <div>Votre objectif dans ce jeu est de retrouver les jeux de mots de nos amis les petits commerçants.</div>
          <div>Chaque partie comporte 3 manches de 30 secondes chacunes.</div>
          <div>
            <div>3 niveaux de difficultés sont disponibles :</div>
            <div>Facile : vous aurez à l'écran la devanture du magasin avec son nom en partie caché ainsi qu'un petit indice sur le nom à trouver</div>
            <div>Intermédiaire : vous aurez à l'écran la devanture du magasin avec son nom intégralement caché ainsi qu'un petit indice sur le nom à trouver</div>
            <div>Difficile : vous aurez à l'écran le magasin intégralement flouté ainsi qu'un petit indice sur le nom du magasin à trouver</div>
          </div>
          <div>
            Pour commencer, veuillez sélectionner votre niveau de difficulté :
            <div className={styles.form}>
              <Link href="/easy">Facile</Link>
              <Link href="/medium">Intermédiaire</Link>
              <Link href="/hard">Difficile</Link>
            </div>
              
          </div>
          
      </main>
    </>
  )
}
