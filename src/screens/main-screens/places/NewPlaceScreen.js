import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/color-constants';


const NewPlaceScreen = () => {
    const [title, setTitle] = useState();

    const textChangeHandler = text => {
        setTitle(text);
    }

    const savePlaceHandler = () => {
        console.log('savePlaceHandler');
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Add a new place!</Text>
                <TextInput
                    value={title}
                    onChangeText={textChangeHandler}
                    style={styles.textInput} />
                <Button
                    title="save place"
                    onPress={savePlaceHandler}
                    color={COLORS.NAVYBLUE}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 15,
    },
    textInput: {
        borderBottomColor: COLORS.GREY,
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingHorizontal: 2,
        paddingVertical: 4,
    }
})

export { NewPlaceScreen };

