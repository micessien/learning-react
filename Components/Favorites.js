import React from 'react'
import { StyleSheet, Text } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

function Favorites(props) {
    return (
      <FilmList
        films={props.favoritesFilm}
        navigation={props.navigation}
        favoriteList={true} // Ici on est bien dans le cas de la liste des films favoris. Ce booléen à true permettra d'empêcher de lancer la recherche de plus de films après un scroll lorsqu'on est sur la vue Favoris.
      />
    )
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)