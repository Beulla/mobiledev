import React from "react";
import { TextInput,TouchableOpacity,Text, View,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function SignUp(){
    const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={{ color: 'black',fontSize:16,marginLeft:15 }}>{title}</Text>
        </TouchableOpacity>
    );
    const CustomButton1 = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.button1, buttonStyle]} onPress={onPress}>
            <Text style={{ color: '#17E8D5',marginLeft:15 }}>{title}</Text>
        </TouchableOpacity>
    );
    const navigation=useNavigation()
    const handleNavigation=()=>{
        navigation.navigate("signin")
    }
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.create}>Create Account</Text>
                <Text style={styles.please}>Please fill the input below here</Text>
                <View style={styles.withIcons}>
                    <Ionicons name="person-outline" color="#3E3A4F" style={styles.icons}></Ionicons>
                    <TextInput placeholder="Full Name" style={styles.inputs} placeholderTextColor="#3E3A4F"></TextInput>
                </View>
                <View style={styles.withIcons}>
                    <Ionicons name="phone-portrait" color="#3E3A4F" style={styles.icons}></Ionicons>
                    <TextInput placeholder="Phone" style={styles.inputs} placeholderTextColor="#3E3A4F"></TextInput>    
                </View>
                <View style={styles.withIcons}>
                    <Ionicons name="mail-open-outline" color="#3E3A4F" style={styles.icons}></Ionicons>
                    <TextInput placeholder="Email" style={styles.inputs} placeholderTextColor="#3E3A4F"></TextInput>
                </View>
                <View style={styles.withIcons}>
                    <Ionicons name="lock-closed-outline" color="#3E3A4F" style={styles.icons}></Ionicons>
                    <TextInput placeholder="Password" style={styles.inputs} placeholderTextColor="#3E3A4F"></TextInput>
                </View>
                <CustomButton title="Sign Up"/>
                <View style={styles.bottom}>
                    <Text style={styles.already}>Already have an account?</Text>
                    <CustomButton1 title="Sign in" onPress={handleNavigation}/>
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
        textAlign:'center',
        marginTop:120,
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
        marginTop:35
    },
    withIcons:{
        flexDirection:'row',
        marginLeft:40
    }
})