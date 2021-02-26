import React from 'react';
import { Card, CardSection, ButtonComponent, Loader } from '../../components/index';
import { View, Text, TextInput, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import { signInUserAction } from '../../actions/index';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from '../../constants/color-constants';

const LoginScreen = ({ navigation }) => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const user = useSelector(state => state.user.user);
    const errorMessage = useSelector(state => state.user.errorMessage);
    const isLoading = useSelector(state => state.user.isLoading || false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user && Object.keys(user).length > 0) {
            navigation.navigate('Main');
        }
    }, [user]);

    const handleChange = (event, name) => {
        const val = event.nativeEvent.text;
        setState({
            ...state,
            [name]: val,
        });
    }

    const onLogin = () => {
        navigation.setOptions({ headerTitle: 'Just a moment..' })
        dispatch(signInUserAction({ email, password }));

        setState({
            email: '',
            password: '',
        });
    }

    const renderButton = () => {
        const { email, password } = state;
        const btnDisabled = !(email && email.length > 0 && password && password.length > 0);

        if (isLoading) {
            return <Loader size={'large'} />
        } else {
            return <ButtonComponent color={COLORS.DEFAULT} name={'Login'} disabled={btnDisabled} onPress={onLogin} />
        }
    }

    const { textInputStyle } = styles;
    const { email, password } = state;


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {
                    errorMessage ?
                        <Text>{errorMessage}</Text> :
                        null
                }
                {
                    isLoading ?
                        <ActivityIndicator size={'large'} color="#0000ff" /> :
                        null
                }
                {
                    !isLoading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Card style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <CardSection>
                                    <TextInput style={textInputStyle}
                                        value={email}
                                        placeholder="enter email"
                                        name='email'
                                        onChange={(e) => handleChange(e, 'email')} />
                                </CardSection>
                                <CardSection>
                                    <TextInput
                                        value={password}
                                        placeholder="enter password"
                                        style={textInputStyle}
                                        name='password'
                                        secureTextEntry
                                        onChange={(e) => handleChange(e, 'password')} />
                                </CardSection>

                                <CardSection style={{ justifyContentL: 'center', alignItems: 'center', marginVertical: 20 }}>
                                    {
                                        renderButton()
                                    }
                                </CardSection>
                            </Card>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text>Register</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        null
                }

            </View>
        </SafeAreaView>
    );
}

const styles = {
    textInputStyle: {
        display: 'flex',
        flexDirection: 'column',
        height: 40,
        borderColor: 'gray',
        width: '100%',
    },
    textStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
};

export { LoginScreen };
