import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import { GameText } from '../../../components';
import { COLORS } from '../../../constants/color-constants';
import { IMAGE } from '../../../constants/image-constants';
import { GameOverScreen, PlayGameScreen, StartGameScreen } from '../index';


const GameContainerScreen = () => {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);

    const handleStartGame = (number) => {
        setUserNumber(number);
    }

    const handleGameOver = (rounds) => {
        setGuessRounds(rounds);
    }

    const handleRestart = () => {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let content = <StartGameScreen onStartGame={handleStartGame} />

    if (userNumber && guessRounds <= 0) {
        content = <PlayGameScreen onGameOver={handleGameOver} userChosenValue={userNumber} />
    }

    if (guessRounds > 0) {
        content = <GameOverScreen
            guessRounds={guessRounds}
            userNumber={userNumber}
            onRestart={handleRestart} />
    }

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={IMAGE.GAME_BG}
                style={styles.imageContainerStyle}
            />
            <View style={styles.wrapperStyle} >
                {content}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainerStyle: {
        flex: 1,
        resizeMode: 'cover',
    },
    wrapperStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})

export { GameContainerScreen };