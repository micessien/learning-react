import React from 'react'
import {StyleSheet, View, Button, TextInput} from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={{marginTop: 20}}>
                <TextInput style={styles.textInput} placeholder="Titre du film" />
                <Button style={{height: 50}} title="Rechercher" onPress={() => {}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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