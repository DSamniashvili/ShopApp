import React, { useRef, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { CustomHeader } from '../../components';

const EditProductScreen = ({ route, navigation }) => {
    const { id } = route.params;
    let itemToBeEdited = useSelector(state => state.products.availableProducts.find(item => item.id === id));

    const [title, setTitle] = useState(itemToBeEdited ? itemToBeEdited.title : '');
    const [price, setPrice] = useState(itemToBeEdited ? itemToBeEdited.price : '');
    const [imageUrl, setImageUrl] = useState(itemToBeEdited ? itemToBeEdited.imageUrl : '');
    const [description, setDescription] = useState(itemToBeEdited ? itemToBeEdited.description : '');

    const handleSubmit = () => {
        console.log('handleSubmit', titleEl.current.value);
    }


    return (
        <SafeAreaView>
            <CustomHeader
                title={itemToBeEdited ? `Edit ${itemToBeEdited.title}` : 'Add a new item'}
                isHome={false}
                navigation={navigation} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInputStyle}
                    value={title}
                    onChangeText={text => setTitle(text)}
                    placeholder={'title'} />
                <TextInput
                    style={styles.textInputStyle}
                    value={price.toString()}
                    keyboardType={'number-pad'}
                    onChangeText={text => setPrice(text)}
                    placeholder={'price'} />
                <TextInput
                    style={styles.textInputStyle}
                    value={imageUrl}
                    onChangeText={text => setImageUrl(text)}
                    placeholder={'imageUrl'} />

                <TextInput
                    style={styles.textInputStyle}
                    value={description}
                    onChangeText={text => setDescription(text)}
                    placeholder={'description'} />

                {
                    // itemInputs.map((type, index) => {
                    // return <TextInput
                    //     style={styles.textInputStyle}
                    //     key={index}
                    //     ref={`${type}El`}
                    //     placeholder={type} />
                    // })
                }
            </View>
            <View style={styles.submitContainer}>
                <Button title="submit" onPress={handleSubmit} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
    },
    textInputStyle: {
        width: '100%',
        height: 50,
        // backgroundColor: 'white',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginBottom: 5,
    }
})

export { EditProductScreen };
