import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, Dimensions } from 'react-native';
import { COLORS } from '../../../constants/color-constants';
import { ButtonComponent, GameText } from '../../../components/index';
import Constants from '../../../constants/index';

const window = Constants.WINDOW_DIMENSION;
const screen = Constants.SCREEN_DIMENSION;


const generateRandomBetween = (min, max, excludedVal) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === excludedVal) {
        return generateRandomBetween(min, max, excludedVal);
    } else {
        return randomNum;
    }
}

const PlayGameScreen = ({ userChosenValue, onGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChosenValue));
    const [guesses, setGuesses] = useState([]);
    const [dimensions, setDimensions] = useState({ window, screen });

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        console.log('onDimensionChange', dimensions);
        if (currentGuess === userChosenValue) {
            onGameOver(guesses.length);
        }

        const onDimensionChange = ({ window, screen }) => {

            setDimensions({ window, screen });
        };

        Dimensions.addEventListener("change", onDimensionChange);
        return () => {
            Dimensions.removeEventListener("change", onDimensionChange);
        };
    });


    const nextGuessNumberHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userChosenValue) ||
            (direction === 'higher' && currentGuess > userChosenValue)) {
            Alert.alert('Incorrect hint', "He lp me guess!", [{
                text: 'Okey',
                style: 'cancel',
            }]);
            return;
        } else {
            if (direction === 'lower') {
                currentHigh.current = currentGuess;
            } else {
                currentLow.current = currentGuess + 1;
            }

            const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
            setGuesses(prevGuesses => [nextNumber, ...prevGuesses]);
            setCurrentGuess(nextNumber);
        }

    }

    const renderListItem = (item, index) => {
        return (
            <View key={index} style={styles.listItem}>
                <GameText>#{index}: </GameText>
                <GameText>{item}</GameText>
            </View>
        )
    }


    return (
        <View style={styles.containerStyle}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%',
                marginTop: Dimensions.get('window').height > 600 ? 50 : 10,
                marginBottom: 10
            }}>
                <GameText customStyles={{ fontSize: 18 }}>Opponent guessed:</GameText>
                <GameText customStyles={{ margin: 10, fontSize: 20 }}>{currentGuess}</GameText>
                <View style={styles.buttonsContainerStyle}>
                    <View style={{ width: dimensions.window.width / 4 }}>
                        <ButtonComponent color={COLORS.DEFAULT}
                            icon='arrow-down'
                            onPress={nextGuessNumberHandler.bind(this, 'lower')}>
                        </ButtonComponent>

                    </View>
                    <View style={{ width: dimensions.window.width / 4 }}>
                        <ButtonComponent color={COLORS.DEFAULT}
                            icon='arrow-up'
                            onPress={nextGuessNumberHandler.bind(this, 'higher')} />
                    </View>
                </View>

            </View>
            <View style={{ flex: 1, width: '80%' }}>
                <ScrollView contentContainerStyle={styles.listContent} >
                    {
                        guesses && guesses.length > 0 && guesses.map((guess, index) => renderListItem(guess, guesses.length - index))
                    }
                </ScrollView>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    buttonsContainerStyle: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 20,
    },
    cardContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginTop: Dimensions.get('window').height > 600 ? 50 : 25,
        marginBottom: 10,
    },
    listItem: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 50,
        margin: 10,
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '60%',
    },
    listContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})

export { PlayGameScreen };