import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import FilmList from "./FilmList";

function Favorites(props) {
  return (
    <FilmList
      films={props.favoritesFilm}
      navigation={props.navigation}
      favoriteList // Ici on est bien dans le cas de la liste des films favoris. Ce booléen à true permettra d'empêcher de lancer la recherche de plus de films après un scroll lorsqu'on est sur la vue Favoris.
    />
  );
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
    favoritesFilm: state.favoritesFilm,
  });

export default connect(mapStateToProps)(Favorites);
