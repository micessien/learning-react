import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import DetailsFilm from './filmItem/DetailsFilm'
import { getImageFromApi } from '../API/TMDBApi'

function FilmItem(props) {
        const { film, displayDetailForFilm } = props;

        return (
            <TouchableOpacity onPress={() => displayDetailForFilm(film.id)} style={styles.main_container}>
                <Image
                style={styles.image}
                source={{uri: getImageFromApi(film.poster_path)}}
                />

                <DetailsFilm film={film} />
            </TouchableOpacity>
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