import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, SafeAreaView, Button, Alert, Modal, StyleSheet, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ButtonComponent, CustomHeader, CustomHeaderButtonsContainer, Loader } from '../../components/index';
import CartItem from '../../components/shop/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { emptyOrdersAction, fetchOrders, handleEDeleteOrder } from '../../actions/orders-actions';
import { addOrderAction } from '../../actions/orders-actions';
import OrderItem from '../../components/shop/OrderItem';
import OrderDetailItem from '../../components/shop/OrderDetailItem';
import { COLORS } from '../../constants/color-constants';
import { Item } from 'react-navigation-header-buttons';

const OrdersScreen = ({ navigation }) => {

    const orders = useSelector(state => state.orders.orders);

    const dispatch = useDispatch();

    const [modalOpen, setModalOpen] = useState(false);
    const [itemContent, setItemContent] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const loadOrders = useCallback(async () => {
        setIsLoading(true);
        setError(false);

        try {
            await dispatch(fetchOrders())
        } catch (error) {
            setError(error.message);
        }

        setIsLoading(false);
    }, [dispatch, setIsLoading, setError]);


    useEffect(() => {
        loadOrders();
    }, [dispatch, loadOrders]);


    const handleEmptyOrders = (navigation) => {
        dispatch(emptyOrdersAction());
        Alert.alert('Empty orders', "Your order history has been cleared", [{
            text: 'Okey',
            style: 'cancel',
        }]);

        navigation.navigate('Home');
    }

    const handleViewOrderDetails = (item) => {
        setModalOpen(true);
        setItemContent(item ? item.items : []);
    }

    const handleDeleteOrder = (itemId) => {
        dispatch(handleEDeleteOrder(itemId));
    }


    let modalContent;
    if (modalOpen) {
        modalContent =
            <Modal animationType={"fade"}
                visible={modalOpen}
                transparent={true}
                onRequestClose={() => { console.log("Modal has been closed.") }}>
                <View style={styles.orderDetailsContainer}>
                    <View style={styles.modal}>
                        <ScrollView style={styles.orderDetails}>
                            {
                                itemContent && itemContent.map((item, index) => {
                                    return (
                                        <OrderDetailItem item={item} key={index} />
                                    )
                                })
                            }

                        </ScrollView>
                        <ButtonComponent color={COLORS.NAVYBLUE}
                            customButtonStyle={{ position: 'absolute', top: -15, right: -10 }}
                            icon='close'
                            onPress={() => {
                                setModalOpen(!modalOpen)
                            }}>
                        </ButtonComponent>

                    </View>

                </View>
            </Modal >
    }

    const renderItem = ({ item }) => (
        <OrderItem
            item={item}
            totalAmount={item.totalAmountFixedSize}
            readableDate={item.readableDate}
            onViewOrderDetails={() => handleViewOrderDetails(item)}
            onDeleteOrder={() => handleDeleteOrder(item.id)} />
    )

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>{error}</Text>
                <Button onPress={loadOrders} title="Try again"></Button>
            </View>
        );
    }

    if (isLoading) {
        return <Loader size={'large'} />;
    }

    if (!isLoading && orders.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No orders loaded</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title={'Orders'}
                handleGoBack={() => navigation.navigate('Home')}
                isHome={false} navigation={navigation} />

            <Button title="Empty orders" disabled={orders.length === 0 || modalOpen} onPress={() => handleEmptyOrders(navigation)} />
            <FlatList data={orders}
                keyExtractor={item => item.id}
                renderItem={renderItem} />
            {
                modalOpen ?
                    <View style={{
                        flex: 1,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(52, 52, 52, 0.7)'
                    }}></View> :
                    null
            }

            {modalContent}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 10
    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    },

    orderDetailsContainer: {
        height: Dimensions.get('window').height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        // borderWidth: 2,
        borderRadius: 10,
        // borderColor: '#333',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        position: 'relative',
        padding: 5,
        marginVertical: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width - 40,
        marginHorizontal: 20,
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // backgroundColor: 'green',
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    orderDetails: {
        width: '100%',
        height: '100%',
        flex: 1,
        // backgroundColor: 'red',
    },
})

export { OrdersScreen };