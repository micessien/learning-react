const initialState = {
    favoriteFilm: []
}

function toggleFavorite(state = initialState, action) {
    let nexState

    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoriteFilmIndex = state.favoriteFilm.findIndex(item => item.id === action.value.id)
            if (favoriteFilmIndex !== -1) {
                // suppression
                nexState = {
                    ...state,
                    favoriteFilm: this.state.favoriteFilm.filter((item, index) => index !== favoriteFilmIndex)
                }
            } else{
                // ajouter
                nexState = {
                    ...state,
                    favoriteFilm: [...state.favoriteFilm, action.value]
                }
            }
            return nexState || state

        default:
            return state
            break;
    }
}

export default toggleFavorite