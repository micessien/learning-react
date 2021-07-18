import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import FilmList from "./FilmList";
import Avatar from './Avatar';

function Favorites(props) {
  return (
    <View style={styles.main_container}>
      <View style={styles.avatar_container}>
        <Avatar/>
      </View>
      <FilmList
        films={props.favoritesFilm}
        navigation={props.navigation}
        favoriteList // Ici on est bien dans le cas de la liste des films favoris. Ce booléen à true permettra d'empêcher de lancer la recherche de plus de films après un scroll lorsqu'on est sur la vue Favoris.
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  avatar_container: {
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
    favoritesFilm: state.toggleFavorite.favoritesFilm,
  });

export default connect(mapStateToProps)(Favorites);
