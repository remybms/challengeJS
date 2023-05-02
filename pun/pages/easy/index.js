import Head from 'next/head';
import React from 'react'
import { useState } from 'react';
import { timer, isAnswer, setPoints, Points, nextRound, readFileContent } from '@/functions/game';
import styles from "../../styles/levels.module.css"


export default function Easy() {
    const [gameStarted, updateGameStarted] = useState(false)

    const [timeLeft, noTimeLeft] = useState(true)

    const [guessedAnswer, setAnswer] = useState(String)

    const [goodAnswer, checkAnswer] = useState(false)

    const [image, setImage] = useState(Number)

    const level = "easy"
    const src = '/magasins/' + image + '.png'
    const srcHalfBlurred = '/titleHalfBlurred/' + image + '.png'
    const indice = '/indices/' + image + '.txt'
    const answer = '/answers/' + image + '.txt'
    

    return (
        <><Head>
            <title>Bon courage</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            {gameStarted ? (
                <>
                    {timeLeft ? (<>
                        <audio controls autoPlay hidden>
                            <source src='/sound/level_music.mp3'></source>
                        </audio>
                        <h1 id='safeTimerDisplay'></h1>
                        <div>
                           <img src={srcHalfBlurred} id='imageBlurred' className={styles.image}></img>
                           <div>{readFileContent(indice)}</div>
                        </div>
                        
                        <form>
                            <input type='text' id='textAnswer' onChange={(e) => { setAnswer(e.target.value) }} />
                        </form>

                        <button id='submitAnswer' onClick={() => isAnswer(guessedAnswer, noTimeLeft, checkAnswer, answer)}>envoyer</button>

                    </>) : (<>
                        {goodAnswer ? (<>
                        <h1> TEMPS ÉCOULÉ ! Bien joué champion</h1>
                        <img src={src} id='image' className={styles.image}></img>
                        <div>{guessedAnswer}</div>
                        {setPoints(level)}
                        <div>Vous avez au total {Points} point(s)</div>
                        <button id='submitAnswer' onClick={() => nextRound(updateGameStarted, noTimeLeft, checkAnswer, setAnswer)}>Prochaine manche</button>
                        </>
                        ) : (<> 
                        <h1> TEMPS ÉCOULÉ ! Une prochaine fois</h1>
                        <img src={src} id='image' className={styles.image}></img>
                        <div>{guessedAnswer}</div>
                        <button id='submitAnswer' onClick={() => nextRound(updateGameStarted, noTimeLeft, checkAnswer, setAnswer)}>Prochaine manche</button>
                        </>
                        )}
                        
                        

                    </>)}
                </>
            ) : (
                <>
                    <button id='gameStart' onClick={() => timer(updateGameStarted, noTimeLeft, setImage)} >launch the game</button>
                </>
            )}
        </>)
}