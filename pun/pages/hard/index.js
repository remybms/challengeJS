import Head from 'next/head';
import React from 'react'
import { useState } from 'react';
import { timer, isAnswer, setPoints, Points, nextRound, displayIndice } from '@/functions/levels';
import styles from "../../styles/levels.module.css"


export default function Easy() {
    const [gameStarted, updateGameStarted] = useState(false)

    const [timeLeft, noTimeLeft] = useState(true)

    const [guessedAnswer, setAnswer] = useState(String)

    const [goodAnswer, checkAnswer] = useState(false)

    const [image, setImage] = useState(Number)

    const level = "hard"
    const src = '/magasins/' + image + '.png'
    const srcBlurred = '/titleFullBlurred/' + image + '.png'
    const indice = '/indices/' + image + '.txt'
    const answer = '/answers/' + image + '.txt'


    return (
        <><Head>
            <title>Bon courage</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.page}>

            {gameStarted ? (
                <>
                    {timeLeft ? (<>
                        <audio controls autoPlay hidden>
                            <source src='/sound/level_music.mp3'></source>
                        </audio>
                        <h1 id='safeTimerDisplay' className={styles.title}></h1>
                        <div className={styles.divImage}>
                            <img src={srcBlurred} id='imageBlurred' className={styles.image} onLoad={() => displayIndice(indice)}></img>  
                        </div>
                        <div id='indice' className={styles.text}></div>
                        <form className={styles.form}>
                            <input type='text' id='textAnswer' onChange={(e) => { setAnswer(e.target.value) }} className={styles.input} />
                        </form>

                        <button id='button' onClick={() => isAnswer(guessedAnswer, noTimeLeft, checkAnswer, answer)} className={styles.button}>envoyer</button>

                    </>) : (<>
                        {goodAnswer ? (<>
                            <audio controls autoPlay hidden>
                                <source src='/sound/ending_round_win.mp3'></source>
                            </audio>
                            <h1 className={styles.title}> TEMPS ÉCOULÉ ! Bien joué champion</h1>
                            <div className={styles.divImage}>
                                <img src={src} id='image' className={styles.image} onLoad={() => setPoints(level)}></img>
                            </div>
                            <div className={styles.text}>Vous avez au total {Points} point(s)</div>
                            <button id='button' onClick={() => nextRound(updateGameStarted, noTimeLeft, checkAnswer, setAnswer)} className={styles.button}>Prochaine manche</button>
                        </>
                        ) : (<>
                            <audio controls autoPlay hidden>
                                <source src='/sound/ending_round_lose.mp3'></source>
                            </audio>
                            <h1 className={styles.title}> TEMPS ÉCOULÉ ! Une prochaine fois</h1>
                            <div className={styles.divImage}>
                                <img src={src} id='image' className={styles.image}></img>
                            </div>
                            
                            <button id='button' onClick={() => nextRound(updateGameStarted, noTimeLeft, checkAnswer, setAnswer)} className={styles.button}>Prochaine manche</button>
                        </>
                        )}



                    </>)}
                </>
            ) : (
                <>
                    <h1 className={styles.title}>Vous êtes prêt ?</h1>
                    <button id='button' onClick={() => timer(updateGameStarted, noTimeLeft, setImage)} className={styles.buttonStart}>launch the game</button>
                </>
            )}
                    </div>

        </>)
}