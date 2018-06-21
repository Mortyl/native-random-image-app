import React, {Component} from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';

const ImageScreen = ({navigation}) => {
	const body = navigation.getParam('body');
	
	return(
	<View style={styles.container}>
	<Image style={styles.image} source={{uri: body}} />
	</View>
	)
}

const styles = StyleSheet.create({
		container: { 
		    flex: 1,
		    backgroundColor: '#fff',
		    alignItems: 'center',
		    justifyContent: 'center',
		    padding:30 
		},

		image: {
			width: 200, 
			height: 300,
			justifyContent: 'center',
			marginVertical: 10
		}
	});


ImageScreen.navigationOptions = ({navigation}) => {
	const title = navigation.getParam('title');
	return{
  title: title,
  headerStyle: {
    backgroundColor: '#388E3C'
  },
  headerTintColor: '#ffffff',
  headerRight: (
          <Entypo name="baidu" size={35} color="white" />)
	}
}

export default ImageScreen

