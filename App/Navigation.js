import { createStackNavigator } from 'react-navigation'
import HomeScreen from './Screens/HomeScreen'
import SobreScreen from './Screens/SobreScreen'

export default createStackNavigator({
  home: {screen: HomeScreen},
  sobre: {screen: SobreScreen}
}, {
  initialRouteName: 'home',
})

