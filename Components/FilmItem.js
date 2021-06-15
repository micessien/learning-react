import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import DetailsFilm from './filmItem/DetailsFilm'
import { getImageFromApi } from '../API/TMDBApi'

function FilmItem(props) {
        const { film, displayDetailForFilm } = props;

        const _displayFavoriteImage = () => {
          if (props.isFilmFavorite) {
            // Si la props isFilmFavorite vaut true, on affiche le 🖤
            return (
              <Image
                style={styles.favorite_image}
                source={require('../Images/ic_favorite.png')}
              />
            )
          }
        }

        return (
            <TouchableOpacity
              onPress={() => displayDetailForFilm(film.id)}
              style={styles.main_container}>
                <Image
                style={styles.image}
                source={{uri: getImageFromApi(film.poster_path)}}
                />

                <DetailsFilm favoriteImage={_displayFavoriteImage()} film={film} />
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
    },
    favorite_image: {
      width: 25,
      height: 25,
      marginRight: 5
    }
  })

export default FilmItem