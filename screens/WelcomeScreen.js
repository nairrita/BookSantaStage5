import * as React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase'
import SantaAnimation from '../components/SantaAnimation'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            email: ' ',
            password: ' '
        }
    }

userSignUp = (email,password)=>{
firebase.auth().createUserWithEmailAndPassword(email,password)
.then(response=>{
    return Alert.alert("User Added Succesfully")
})
.catch(error=>{
    var errorCode = error.code
    var errorMessage = error.message
    return Alert.alert(errorMessage)
})
}
userlogIn=(email,password)=>{
firebase.auth().signInWithEmailAndPassword(email,password)
.then(response=>{
    return Alert.alert("Successfully LoggedIn")
})
.catch(error=>{
    var errorCode = error.code
    var errorMessage = error.message
    return Alert.alert(errorMessage)
})
}
  render(){
    return(
      <View style = {styles.container}>
          <View style = {styles.profileContainer}>
              <SantaAnimation/>
          <Text style = {styles.title}>BOOK SANTA</Text>
          </View>
          <View style = {styles.buttonContainer}>
<TextInput style  = {styles.inputBox}
placeholder = {'abc@example.com'}
keyboardType = "email-address"
onChangeText = {(text)=>{
this.setState({
    email:text
})
}}
/>
<TextInput style  = {styles.inputBox}
placeholder = {'password'}
secureTextEntry = {true}
onChangeText = {(text)=>{
this.setState({
    password:text
})
}}
/>
<TouchableOpacity style = {[styles.button,{marginBottom:20,marginTop:20}]} 
onPress ={()=>{
    this.userlogIn(this.state.email,this.state.password)
}}
>
<Text style = {styles.buttonText}>Login</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.button} 
onPress ={()=>{
    this.userSignUp(this.state.email,this.state.password)
}}
>
<Text style = {styles.buttonText}>SignUp</Text>
</TouchableOpacity>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f8be85'
  },
  title:{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color:'#ff3d00'
  },
  inputBox:{
      width:300,
      height:40,
      borderBottomWidth:1.5,
      borderColor:'#ff8a65',
      fontSize:20,
      margin:10,
      paddingLeft:10
  },
  button:{
      width:300,
      height:50,
      justifyContent:'center',
      
      borderRadius:25,
      backgroundColor:'#ff9800',
      shadowColor:'#000',
      shadowOffset:{
          width:0,
          height:8
      },
      shadowOpacity: 0.30,
      shadowRadius:10.32,
      elevation:16
  },
  buttonText:{
      color:'#ffff',
      fontWeight:'bold',
      fontSize:20,
      marginLeft:10
  },
  buttonContainer:{
      flex:1,
      alignItems:'center'
  },
  profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
})