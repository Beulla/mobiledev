import React, { useState } from "react";
import { View,TouchableOpacity,Text,TextInput,StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
export default function SignIn(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={{ color: 'black',fontSize:16,marginLeft:30 }}>{title}</Text>
        </TouchableOpacity>
    );
    const CustomButton1 = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.button1, buttonStyle]} onPress={onPress}>
            <Text style={{ color: '#17E8D5',marginLeft:15 }}>{title}</Text>
        </TouchableOpacity>
    );
    const navigation=useNavigation()
    const handleNavigation=()=>{
        navigation.navigate("signup")
    }
    const handleSubmit=async(e)=>{
        if(!email||!password){
            alert("please fill all fields")
        }
        e.preventDefaults()
        await axios.post("http://localhost:4000/auth/login",{username,email})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <View style={styles.container}>
            <Image source={require("./image.png")} style={styles.image}></Image>
            <View>
                <Text style={styles.create}>Login</Text>
                <Text style={styles.please}>Please fill the input below here</Text>
                <View style={styles.withIcons}>
                    <Ionicons name="mail-open-outline" color="#3E3A4F" style={styles.icons}></Ionicons>
                    <TextInput placeholder="Email" style={styles.inputs} placeholderTextColor="#3E3A4F" value={email} onChangeText={text=>setEmail(text)}></TextInput>
                </View>
                <View style={styles.withIcons}>
                    <Ionicons name="lock-closed-outline" color="#3E3A4F" style={styles.icons}></Ionicons>
                    <TextInput placeholder="Password" style={styles.inputs} placeholderTextColor="#3E3A4F" value={password} onChangeText={text=>setPassword(text)} secureTextEntry></TextInput>
                </View>
                <CustomButton title="Login" onPress={handleSubmit}/>
                <View style={styles.bottom}>
                    <Text style={styles.already}>Don't have an account?</Text>
                    <CustomButton1 title="Sign Up" onPress={handleNavigation}/>
                </View>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        backgroundColor:"#1E192E"
    },
    create:{
        color:'white',
        fontSize:30,
        marginLeft:66,
        marginTop:50,
        fontWeight:'bold'
    },
    please:{
        color:'#3E3A4F',
        fontSize:17,
        textAlign:'center',
        marginTop:13,
        marginBottom:15
    },
    button:{
        backgroundColor:'#17E8D5',
        color:'black',
        width:'30%',
        padding:5,
        textAlign:'center',
        borderRadius:50,
        marginLeft:130,
        marginTop:30
    },
    inputs:{
        color:'#3E3A4F',
        fontSize:15,
        width:'90%',
        marginTop:15,
        borderRadius:3,
        padding:15,
        // textAlign:'center',
        marginLeft:-7,
    },
    bottom:{
        marginLeft:60,
        flexDirection:'row',
        marginTop:30
    },
    already:{
        color:'#3E3A4F',
        marginBottom:42
    },
    icons:{
        marginLeft:20,
        marginTop:38
    },
    withIcons:{
        flexDirection:'row',
        marginLeft:40
    },
    image:{
        height:200,
        width:'100%',
        marginTop:20
    }
})