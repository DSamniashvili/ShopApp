import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumListItem from './AlbumListItem';

import { connect } from 'react-redux';
import { loadAlbums, testAction } from '../../actions';
// import Constants from '../../constants';

class AlbumsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
        }
    }
    componentDidMount() {
        this.props.dispatch(loadAlbums("https://api.themoviedb.org/3/trending/movie/week?api_key=ef14d9d59599c16d7186f40a1b3b4eda"));
    }

    openAlbumDetails = () => {
        this.props.dispatch(testAction());
        debugger
    }

    renderData = () => {
        if (this.props.albums.albums && this.props.albums.albums.length > 0) {
            return this.props.albums.albums.map((item, index) => <AlbumListItem item={item} key={index} clickFunction={this.openAlbumDetails} />)
        }

        return <Text>Loading...</Text>;
    }

    render() {
        return (
            <ScrollView>
                {this.renderData()}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        albums: state.albums,
    }
}

export default connect(mapStateToProps)(AlbumsList);

