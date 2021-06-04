import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

function DetailsFilm() {
    return (
        <View style={styles.main_container}>
            <View style={{flexDirection: 'row', flex: 1}}>
                <Text style={{flex: 2}}>Titre du film</Text>
                <Text style={{flex: 1}}>Vote</Text>
            </View>

            <View style={{flex: 2}}>
                <Text>Description</Text>
            </View>

            <View style={{flex: 1}}>
                <Text>Sorti le 00/00/0000</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container:{
        flexDirection: 'column'
    },
})

export default DetailsFilm