import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ImageScreen from './ImageScreen';

class StartScreen extends Component {
	constructor(props) {
	    super(props);
	    this.onPress = this.onPress.bind(this);
	    this.onPressG = this.onPressG.bind(this);
	    this.onPressB = this.onPressB.bind(this);
	}
	onPress() {
   		this.props.navigation.navigate('ImageScreen', {
   			title: 'Regular Image',
    		body: "https://picsum.photos/400/600/?random"
  	  });
  	}

	onPressG() {
   		this.props.navigation.navigate('ImageScreen', {
   			title: 'Greyscale Image',
    		body: 'https://picsum.photos/g/400/600/?random'
  	  })
  	}	

	onPressB() {
		this.props.navigation.navigate('ImageScreen', {
			title: 'Blurred Image',
			body: 'https://picsum.photos/400/600/?random&blur'
  		})
  	}	

	render() {
	 	return(
		<View style={styles.container}>
		<TouchableHighlight onPress={this.onPress} style={styles.button}>
			<Text style={styles.label}> View Image </Text>
		</TouchableHighlight>
		<TouchableHighlight onPress={this.onPressG} style={styles.button}>
			<Text style={styles.label}> View Greyscale Image </Text>
		</TouchableHighlight>
		<TouchableHighlight onPress={this.onPressB} style={styles.button}>
			<Text style={styles.label}> View Blurred Image </Text>
		</TouchableHighlight>
		</View>
		)
	}
}


const styles = StyleSheet.create({
		container: { 
		    flex: 1,
		    backgroundColor: '#fff',
		    alignItems: 'center',
		    justifyContent: 'center',
		    padding:30 
		},

		button: { 
		    height: 50,
		    width: 200, 
		    margin: 5,
		    alignItems: 'center',
		    justifyContent: 'center',
	    	borderRadius: 8,
	    	backgroundColor: '#388E3C'
		}, 

		label: { 
			fontSize: 18,
				fontWeight: 'bold',
			color: 'white'
		}, 
});

const RootNavigator = createStackNavigator({
  StartScreen: StartScreen,
  ImageScreen: ImageScreen
});

StartScreen.navigationOptions = {
  title: 'Start',
  headerStyle: {
    backgroundColor: '#388E3C'
  },
  headerTintColor: '#ffffff'
}

StatusBar.setBarStyle('light-content');

export default RootNavigator