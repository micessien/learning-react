import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem';

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textInput} placeholder="Titre du film" />
                <Button style={{height: 50}} title="Rechercher" onPress={() => {}} />

                <FlatList
                    data={films}
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