import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

function DetailsFilm(props) {
    const film = props.film

    return (
        <View style={styles.content_container}>
            <View style={styles.header_container}>
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.vote_text}>{film.vote_average}</Text>
            </View>
            <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
            </View>
            <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content_container: {
        flex: 1,
        margin: 5
      },
      header_container: {
        flex: 3,
        flexDirection: 'row'
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
      },
      vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
      },
      description_container: {
        flex: 7
      },
      description_text: {
        fontStyle: 'italic',
        color: '#666666'
      },
      date_container: {
        flex: 1
      },
      date_text: {
        textAlign: 'right',
        fontSize: 14
      }
})

export default DetailsFilm