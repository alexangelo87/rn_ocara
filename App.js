import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './views/home';
import Resultado from './views/resultado';
import Camera from './views/camera';

const App = createStackNavigator(
  {
    Home: Home,
    Resultado: Resultado,
    Camera: Camera,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(App);
