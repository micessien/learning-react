import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import DetailsFilm from './filmItem/DetailsFilm'
import { getImageFromApi } from '../API/TMDBApi'

function FilmItem(props) {
        return (
            <View style={styles.main_container}>
                <Image
                style={styles.image}
                source={{uri: getImageFromApi(props.film.poster_path)}}
                />

                <DetailsFilm film={props.film} />
            </View>
        )
}

const styles = StyleSheet.create({
    main_container: {
      height: 190,
      flexDirection: 'row'
    },
    image: {
      width: 120,
      height: 180,
      margin: 5,
      backgroundColor: 'gray'
    }
  })

export default FilmItem