import React from 'react'
import { View, Text, Image } from 'react-native';
import { ButtonComponent, Card, CardSection } from '../index';

const AlbumListItem = (props) => {
    const { imageContainerStyle, textContainerStyle, textStyle, imageStyle, fullImageStyle } = styles;

    const { original_title, vote_average, poster_path, backdrop_path } = props.item;

    const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const fullImageUrl = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

    return (
        <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image style={imageStyle} source={{ uri: imageUrl }} />
                </View>
                <View style={textContainerStyle}>
                    <Text style={textStyle}>{original_title}</Text>
                    <Text style={textStyle}>Votes: {vote_average}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={fullImageStyle} source={{ uri: fullImageUrl }} />
            </CardSection>
            <CardSection>
                <ButtonComponent name={'Show details'} onPress={() => props.clickFunction()} />
            </CardSection>
        </Card>
    )
}

const styles = {
    textContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
    },
    textStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageStyle: {
        display: 'flex',
        width: 50,
        height: 50,
    },
    imageContainerStyle: {
        display: 'flex',
        justifyContent: 'center',
        marginRight: 15,
    },
    fullImageStyle: {
        display: 'flex',
        height: 300,
        flex: 1,
        width: null,
    }
}

export default AlbumListItem;
