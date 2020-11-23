import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'

export default class App extends React.Component{
  render(){
    return(
      
        <WelcomeScreen/>

     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})