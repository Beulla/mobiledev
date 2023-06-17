import { Ionicons } from "@expo/vector-icons";
import React,{useRef} from "react";
import { View,TextInput,TouchableOpacity,Text,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Dashboard(){
    const scrollViewRef=useRef(null)
    const handleScrollToEnd=()=>{
        scrollViewRef.current.scrollToEnd({animated:true})
    }
    const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={{ color: 'black',fontSize:16,marginLeft:4,marginTop:6 }}>{title}</Text>
        </TouchableOpacity>
    );
    return(
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Ionicons name="menu-outline" color="white" style={styles.icon1}></Ionicons>
                <Text style={styles.dashboard}>Dashboard</Text>
                <Ionicons name="notifications-sharp" style={styles.notification} color="white"></Ionicons>
            </View>
            <View style={styles.add}>
                <Ionicons name="add" style={styles.icon} color="black"></Ionicons>
                <CustomButton title="Add"/>
            </View>
            <View style={styles.table}>
                <ScrollView ref={scrollViewRef} style={styles.scrollview}>
                    <View style={styles.row}>
                        <Text style={styles.name}>Spire</Text>
                        <Text style={styles.data}>08/21/2018</Text>
                        <Text style={styles.action}>Manage</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Spire</Text>
                        <Text style={styles.data}>08/21/2018</Text>
                        <Text style={styles.action}>Manage</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Spire</Text>
                        <Text style={styles.data}>08/21/2018</Text>
                        <Text style={styles.action}>Manage</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Spire</Text>
                        <Text style={styles.data}>08/21/2018</Text>
                        <Text style={styles.action}>Manage</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Spire</Text>
                        <Text style={styles.data}>08/21/2018</Text>
                        <Text style={styles.action}>Manage</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Spire</Text>
                        <Text style={styles.data}>08/21/2018</Text>
                        <Text style={styles.action}>Manage</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Spire</Text>
                        <Text style={styles.data}>08/21/2018</Text>
                        <Text style={styles.action}>Manage</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Spire</Text>
                        <Text style={styles.data}>08/21/2018</Text>
                        <Text style={styles.action}>Manage</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.name}>Spire</Text>
                        <Text style={styles.data}>08/21/2018</Text>
                        <Text style={styles.action}>Manage</Text>
                    </View>
                </ScrollView>
               
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#1E192E'
    },
    row:{
        flexDirection:'row',
        marginTop:20,
        backgroundColor:'#3E3A4F',
        width:'80%',
        marginLeft:35,
        borderRadius:3,
        padding:20
    },
    name:{
        color:'white',
        marginLeft:20
    },
    data:{
        color:'white',
        marginLeft:30
    },
    action:{
        color:'#17E8D5',
        marginLeft:30
    },
    add:{
        flexDirection:'row',
        marginLeft:240,
        marginTop:30,
        fontSize:20,
        backgroundColor:'#17E8D5',
        width:'22%',
        borderRadius:5,
        padding:4,
        textAlign:'center'
    },
    icon:{
        marginTop:6,
        fontSize:20,
        marginLeft:10
    },
    icon1:{
        marginLeft:30,
        marginTop:20,
        fontSize:20,
    },
    navbar:{
        flexDirection:'row'
    },
    dashboard:{
        color:'white',
        marginTop:20,
        marginLeft:70
    },
    notification:{
        marginTop:24,
        marginLeft:130
    },
    scrollview:{
        height:550
    }
})