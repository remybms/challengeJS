import Head from 'next/head';
import { useState } from 'react';
import { Points } from '@/functions/levels';
import styles from '../../styles/result.module.css'
import { setResult } from '@/functions/results';
import Link from 'next/link'

export default function result() {

    const [noPoints, isPoints] = useState(false)
    const [fullPoints, isFullPoints] = useState(false)
    const [src, setSrc] = useState(String)
    if (src == "") {
        setResult(isPoints, isFullPoints, Points, setSrc)
    } else {
        return (
            <>
                <Head>
                    <title>Terminé</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <img src='/clown.jpg' className={styles.background} />
                {noPoints ? (<>
                    <audio controls autoPlay hidden>
                        <source src={src}></source>
                    </audio>
                    <h1 className={styles.text}>T'es vraiment mauvais</h1>
                    <div className={styles.points}>0 pointé, t'aurais pas pu faire pire</div>
                    <Link href='/' className={styles.points}>Retourner au menu principal</Link>
                </>) : (<>
                    {fullPoints ? (<>
                        <audio controls autoPlay hidden>
                            <source src={src}></source>
                        </audio>
                        <h1 className={styles.text}>Un niveau impresionnant</h1>
                        <div className={styles.points}>T'aurais pas pu faire mieux, 9 points</div>
                        <Link href='/' className={styles.points}>Retourner au menu principal</Link>
                    </>) : (<>
                        <audio controls autoPlay hidden>
                            <source src={src}></source>
                        </audio>
                        <h1 className={styles.text}>pas si mal</h1>
                        <div className={styles.points}>tu as {Points} point(s)</div>
                        <Link href='/' className={styles.points}>Retourner au menu principal</Link>
                    </>)}
                </>)}
            </>
        )
    }
}