import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            films: [],
            isLoading: false
        }
        this.page = 0
        this.totalPages = 0
        this.searchedText = ""
    }

    _loadFilms() {
        this.setState({isLoading: true})
        if(this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({
                    films: [...this.state.films, ...data.results],
                    isLoading: false
                })
                }
            )
        }
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
    }

    _searchFilms() {
        this.page = 0,
        this.totalPages = 0,
        this.setState({
            films: []
        },
            () => {
                console.log('Pages : '+this.page+' / Total Pages : '+this.totalPages+' / Nombre de films : '+this.state.films.length)
                this._loadFilms()
            })
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
        console.log(this.state.isLoading)

        return (
            <View style={styles.main_container}>
                <TextInput onSubmitEditing={() => this._searchFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textInput} placeholder="Titre du film" />
                <Button style={{height: 50}} title="Rechercher" onPress={() => this._searchFilms()} />

                <FlatList
                    data={this.state.films}
                    renderItem={({item}) => <FilmItem film={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if(this.page < this.totalPages) {
                            this._loadFilms()
                        }
                    }}
                />

                {this._displayLoading()}
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
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search