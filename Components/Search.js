import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            films: [],
        }
        this.searchedText = ""
    }

    _loadFilms() {
        if(this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({ films: data.results }))
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
        console.log('RENDER')

        return (
            <View style={styles.main_container}>
                <TextInput onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textInput} placeholder="Titre du film" />
                <Button style={{height: 50}} title="Rechercher" onPress={() => this._loadFilms()} />

                <FlatList
                    data={this.state.films}
                    renderItem={({item}) => <FilmItem film={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
      },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 2,
        height: 50,
        borderColor: '#a2a2a2',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search