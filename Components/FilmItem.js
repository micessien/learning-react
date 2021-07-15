import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
import DetailsFilm from './filmItem/DetailsFilm'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        positionLeft: new Animated.Value(Dimensions.get('window').width)
      }
    }

    componentDidMount() {
      Animated.spring(
        this.state.positionLeft,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver: true, // <-- Add this
        }).start()
    }

    _displayFavoriteImage() {
      if (this.props.isFilmFavorite) {
        // Si la props isFilmFavorite vaut true, on affiche le 🖤
        return (
          <Image
            style={styles.favorite_image}
            source={require('../Images/ic_favorite.png')}
          />
        )
      }
    }

    render() {
      const { film, displayDetailForFilm } = this.props;

      return (
        <Animated.View style={{left: this.state.positionLeft}}>
          <TouchableOpacity
            onPress={() => displayDetailForFilm(film.id)}
            style={styles.main_container}>
              <Image
              style={styles.image}
              source={{uri: getImageFromApi(film.poster_path)}}
              />

              <DetailsFilm favoriteImage={this._displayFavoriteImage()} film={film} />
          </TouchableOpacity>
        </Animated.View>
      )
    }
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