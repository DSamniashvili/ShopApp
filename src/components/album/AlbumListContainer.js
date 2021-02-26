import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumsList from './AlbumsList';
import firebase from 'firebase';
import { ButtonComponent } from '../index';

class AlbumListContainer extends Component {

    onLogout = () => {
        firebase.auth().signOut().then(() => {
            console.log("Sign-out successful.");
        }).catch((error) => {
            console.log('error: ', error);
        });
    }
    render() {
        return (
            <View>
                <View style={{ height: 70 }}>
                    <ButtonComponent name={'Logout'} onPress={this.onLogout} />
                </View>
                <AlbumsList />
            </View>
        )
    }
}

export default AlbumListContainer;