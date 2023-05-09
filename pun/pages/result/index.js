import Head from 'next/head';
import { useState } from 'react';

export default function result(){

    const [noPoints, isPoints] = useState(false)
    const [fullPoints, isFullPoints] = useState(false)

    return(
        <>
        <Head>
            <title>Terminé</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {noPoints ? (<>
            <h1>t'es vraiment mauvais</h1>
            </>) : (<>
                {fullPoints ? (<>
                    <h1>un niveau impresionnant</h1>
                    </>):(<>
                        <h1>pas si mal</h1>
                        </>)}
                </>)}
        </>
    )
}