import React, {Component} from 'react';
import { View, Text, StatusBar, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import StartScreen from './Components/StartScreen'


export default class App extends React.Component {

  render() {
    return (
      <StartScreen />
    );
  }
}































// class HomeScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.onPress = this.onPress.bind(this);
//   }
//   onPress() {
//     this.props.navigation.navigate('Info');
//   }
//   render() {
//     return <Button title="Info Screen" onPress={this.onPress} />;
//   }
// }


// HomeScreen.navigationOptions = {
//   title: 'Home',
//   headerStyle: {
//     backgroundColor: '#68aa63'
//   },
//   headerTintColor: '#ffffff'
// }

// const InfoScreen = () => (
//   <View><Text>This is the Info Screen!</Text></View>
// );

// StatusBar.setBarStyle('light-content');


// const RootNavigator = createStackNavigator({
//   Home: HomeScreen,
//   Info: InfoScreen
// });

// export default RootNavigator;


