import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createProductAction, updateProductAction } from '../../actions/product-actions';
import { CustomHeader } from '../../components';


const EditProductScreen = ({ route, navigation }) => {

    const dispatch = useDispatch();

    const { id } = route.params;
    let itemToBeEdited = useSelector(state => state.products.availableProducts.find(item => item.id === id));

    const [title, setTitle] = useState(itemToBeEdited ? itemToBeEdited.title : '');
    const [price, setPrice] = useState(itemToBeEdited ? itemToBeEdited.price : '');
    const [imageUrl, setImageUrl] = useState(itemToBeEdited ? itemToBeEdited.imageUrl : '');
    const [description, setDescription] = useState(itemToBeEdited ? itemToBeEdited.description : '');

    const submitHandler = useCallback(() => {
        if (!itemToBeEdited) {
            dispatch(createProductAction(title, +price, imageUrl, description));
        } else {
            dispatch(updateProductAction(id, title, +price, imageUrl, description));
        }
    }, [dispatch, id, title, price, imageUrl, description]);

    const MemorizedHeader = useMemo(() =>
        <CustomHeader
            title={itemToBeEdited ? `Edit ${itemToBeEdited.title}` : 'Add a new item'}
            isHome={false}
            navigation={navigation}
            handleHeaderBtnPress={submitHandler}
            headerBtnType={'check'}
            enableEditButton={true} />, [dispatch, id, title, price, imageUrl, description]
    )

    // const itemInputs = [
    //     'title',
    //     'price',
    //     'imageUrl',
    //     'description',
    // ]

    // const memorizedList = useMemo(() =>
    //     itemInputs.map((type, index) => {
    //         return <TextInput
    //             style={styles.textInputStyle}
    //             value={type}
    //             key={index}
    //             ref={`${type}El`}
    //             placeholder={type} />
    //     }), [])


    return (
        <SafeAreaView>
            {MemorizedHeader}
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
