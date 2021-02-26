
import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, TextInput, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Card, Input, CustomHeader, GameText, ButtonComponent } from '../../../components/index';
import { COLORS } from '../../../constants/color-constants';
const regexForNumber = /[^0-9]/g;

import Constants from '../../../constants/index';

const window = Constants.WINDOW_DIMENSION;
const screen = Constants.SCREEN_DIMENSION;

const StartGameScreen = ({ onStartGame }) => {
    const { buttonsContainerStyle, containerStyle, customInputStyles } = styles;

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');
    const [dimensions, setDimensions] = useState({ window, screen });

    const inputHandler = inputValue => {
        setEnteredValue(inputValue.replace(regexForNumber, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    useEffect(() => {
        const onDimensionChange = ({ window, screen }) => {
            setDimensions({ window, screen });
        };

        Dimensions.addEventListener("change", onDimensionChange);
        return () => {
            Dimensions.removeEventListener("change", onDimensionChange);
        };
    });

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (!chosenNumber || isNaN(chosenNumber) || chosenNumber <= 0) {
            Alert.alert('Invalid Number', "Number has to be a number between 1-99", [{
                text: 'Okey',
                style: 'destructive',
                onPress: resetInputHandler,
            }]);

            return;
        }

        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        setConfirmed(true);
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {

        confirmedOutput = <Card cardCustomStyle={styles.summaryContainerStyle}>
            <View style={styles.summaryViewStyle}>
                <GameText>Chosen number</GameText>
                <GameText customStyles={styles.titleStyles}>{selectedNumber}</GameText>
                <View style={{ width: dimensions.window.width / 4 }}>
                    <ButtonComponent color={COLORS.DEFAULT} name="START GAME" onPress={() => onStartGame(selectedNumber)} />
                </View>
            </View>
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={containerStyle}>
                            <GameText customStyles={{ fontSize: 20 }}>Start a game!</GameText>
                            <Card cardCustomStyle={{ width: dimensions.window.width / 1.5, alignItems: 'center' }}>
                                <GameText>Select a number:</GameText>
                                <Input customInputStyles={customInputStyles}
                                    blurOnSubmit
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    keyboardType='number-pad'
                                    onChangeText={inputHandler}
                                    value={enteredValue}
                                    maxLength={2} />
                                <View style={buttonsContainerStyle}>
                                    <View style={{ width: dimensions.window.width / 4 }}>
                                        <ButtonComponent color={COLORS.DEFAULT} name="Reset" onPress={resetInputHandler} />
                                    </View>
                                    <View style={{ width: dimensions.window.width / 4 }}>
                                        <ButtonComponent color={COLORS.RED} name="Confirm" onPress={confirmInputHandler} />

                                    </View>
                                </View>
                            </Card>
                            {confirmedOutput}
                        </View>
                    </SafeAreaView>
                </KeyboardAvoidingView>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleStyles: {
        fontSize: 20,
        marginVertical: 10, //replaces marginBottom and marginTop
    },
    buttonsContainerStyle: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 20,
    },

    customInputStyles: {
        width: 50,
        textAlign: 'center',
    },
    summaryContainerStyle: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export { StartGameScreen };