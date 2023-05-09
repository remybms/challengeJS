import Head from 'next/head';
import { useState } from 'react';
import { Points } from '@/functions/levels';

export default function result() {

    const [noPoints, isPoints] = useState(false)
    const [fullPoints, isFullPoints] = useState(false)

    return (
        <>
            <Head>
                <title>Terminé</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {noPoints ? (<>
                <audio controls autoPlay hidden>
                    <source src='/sound/ending_game_0points.mp3'></source>
                </audio>
                <h1>t'es vraiment mauvais</h1>
            </>) : (<>
                {fullPoints ? (<>
                    <audio controls autoPlay hidden>
                        <source src='/sound/ending_game_max_points.mp3'></source>
                    </audio>
                    <h1>un niveau impresionnant</h1>
                </>) : (<>
                    <audio controls autoPlay hidden>
                        <source src='/sound/ending_game.mp3'></source>
                    </audio>
                    <h1>pas si mal</h1>
                    <div>tu as {Points} points</div>
                </>)}
            </>)}
        </>
    )
}