import * as React from 'react';
import{View,Text,TextInput,TouchableOpacity,StyleSheet, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/AppHeader'

export default class SettingScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName : ' ',
            lastName: ' ',
            contact: ' ',
            address : ' ',
            email:' ',
            docId: ' '

        }
    }
    getUserDetails(){
        var user = firebase.auth().currentUser
        var email = user.email
        db.collection('users').where('email_id', "==",email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                this.setState({
                    email : data.email_id,
                    firstName:data.first_name,
                    lastName: data().last_name,
                    address: data().address,
                    contact:data().contact,
                    docId : doc.id
                })
            })
        })
    }
    componentDidMount(){
        this.getUserDetails()
    }
    updateUserDetails=()=>{
        db.collection('users').doc(this.state.docId).update({
            "first_name" : this.state.firstName,
            "last_name": this.state.lastName,
            "address": this.state.address,
            "contact": this.state.contact
        })
        Alert.alert("Profile Update Successfully")
    }
    render(){
        return(
            <View style = {styles.container}>
                <MyHeader title = "Settings" navigation = {this.props.navigation}/>
            <View style = {styles.formContainer}>
            <TextInput 
            style = {styles.inputBox}
            placeholder = {'First Name'}
            maxLength  = {8}
            onChangeText = {(text)=>{
                this.setState({
                    firstName : text
                })
            }}
            value = {this.state.firstName}
            />
             <TextInput 
            style = {styles.inputBox}
            placeholder = {'Last Name'}
            onChangeText = {(text)=>{
                this.setState({
                    lastName : text
                })
            }}
            value = {this.state.lastName}
            />
            <TextInput 
            style = {styles.inputBox}
            placeholder = {'contact'}
    
            onChangeText = {(text)=>{
                this.setState({
                    contact : text
                })
            }}
            value = {this.state.contact}
            />
            <TextInput 
            style = {styles.inputBox}
            placeholder = {'Address'}
            multiline = {true}
            onChangeText = {(text)=>{
                this.setState({
                    address :text
                })
            }}
            value = {this.state.address}
            />
            <TouchableOpacity style = {styles.button} 
            onPress= {()=>{
                this.updateUserDetails()
            }}
            >
            <Text style  = {styles.buttonText}>Save</Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const  styles  = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    formContainer:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
    inputBox:{
        width:'75%',
        height:35,
        alignSelf:'center',
        borderColor:'black',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10 
    }
})