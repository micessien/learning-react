import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from '../Components/Search';

const screens = {
    Search: {
        screen: Search,
        navigationOptions : {
            title: 'Rechercher'
        }
    }
}

const SearchStackNavigator = createStackNavigator(screens);

export default createAppContainer(SearchStackNavigator);