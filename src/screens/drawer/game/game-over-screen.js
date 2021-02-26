import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ButtonComponent, CustomHeader, GameText } from '../../../components';
import { COLORS } from '../../../constants/color-constants';


const GameOverScreen = ({ guessRounds, userNumber, onRestart }) => {

    return (
        <SafeAreaView style={styles.containerStyle}>
            <CustomHeader title={'Game'} isHome={true} />
            <View style={styles.containerContentStyle}>
                <GameText>Game is over.</GameText>
                <GameText>Your bot guessed in {guessRounds} tries</GameText>
                <GameText>Your number was: {userNumber}</GameText>
                <View style={styles.buttonStyle}>
                    <ButtonComponent color={COLORS.DEFAULT} name="PLAY AGAIN" onPress={onRestart} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerContentStyle: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainerStyle: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 20,
    },
    buttonStyle: {
        width: 100,
        marginTop: 20,
    },
})

export { GameOverScreen };