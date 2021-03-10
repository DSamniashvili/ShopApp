import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPlaceAction } from '../../../actions/place-actions';
import { COLORS } from '../../../constants/color-constants';
import ImagePicker from '../../../components/places/ImagePicker';


const NewPlaceScreen = ({ route, navigation }) => {
    const imageRef = useRef();
    const [title, setTitle] = useState();
    const dispatch = useDispatch();

    const textChangeHandler = text => {
        setTitle(text);
    }

    const savePlaceHandler = () => {
        dispatch(addPlaceAction(title, imageRef.current.uri));
        navigation.goBack();
    }

    const saveFilePath = filePath => {
        console.log('filePath', filePath);
        imageRef.current = filePath;
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Add a new place!</Text>
                <TextInput
                    value={title}
                    onChangeText={textChangeHandler}
                    style={styles.textInput} />
                <ImagePicker saveFilePath={saveFilePath} />
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

