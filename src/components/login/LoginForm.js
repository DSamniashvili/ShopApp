import React, { Component } from 'react';
import { Card, CardSection, ButtonComponent, Loader } from '../index';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { signInUserAction } from '../../actions/index';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange(name) {
        return (text) => {
            this.setState({
                [name]: text,
            })
        }
    }

    onLogin = () => {
        const { email, password } = this.state;
        this.props.dispatch(signInUserAction({ email, password }));

        this.setState({
            email: '',
            password: '',
        });
    }

    renderButton() {
        const btnDisabled = !(this.state.email.length > 0 && this.state.password.length > 0);
        const { isLoading } = this.props;

        if (isLoading) {
            return <Loader size={'large'} />
        } else {
            return <ButtonComponent name={'Login'} disabled={btnDisabled} onPress={this.onLogin} />
        }
    }
    render() {
        const { textInputStyle } = styles;
        const { errorMessage } = this.props;

        return (
            <Card>
                <CardSection>
                    <TextInput style={textInputStyle}
                        value={this.state.email}
                        placeholder="enter email"
                        name='email'
                        onChangeText={this.handleChange('email')} />
                </CardSection>
                <CardSection>
                    <TextInput
                        value={this.state.password}
                        placeholder="enter password"
                        style={textInputStyle}
                        name='password'
                        secureTextEntry
                        onChangeText={this.handleChange('password')} />
                </CardSection>
                {
                    errorMessage ?
                        <Text>{errorMessage}</Text> :
                        null
                }
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
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


const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        errorMessage: state.user.errorMessage,
        isLoading: state.user.isLoading,
    }
}

export default connect(mapStateToProps)(LoginForm);
