import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail';

const screens = {
    Search: {
        screen: Search,
        navigationOptions : {
            title: 'Rechercher'
        }
    },
    FilmDetail: {
        screen: FilmDetail,
        navigationOptions : {
            title: ''
        }
    }
}

const SearchStackNavigator = createStackNavigator(screens);

export default createAppContainer(SearchStackNavigator);