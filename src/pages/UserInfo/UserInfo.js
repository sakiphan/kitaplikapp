import React,{useState} from "react";
import {View,Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './UserInfo.style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'


const UserInfo = ({navigation}) => {
    const [name,setName] = useState('')
    const [age,setAge] = useState()
    const currentUser = auth().currentUser.email.split('@',1).toString();
    const newCurrent = currentUser.replace('.','')
    console.log(newCurrent)
    const handleUpdateProfile = async () => {
        const userInfo = {
            username : name,
            age:age,
            image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
            coverimage:'https://www.colorhexa.com/ff6347.png'
        }
       await database().ref('users/'+newCurrent+'/userInfo').set(userInfo)
        navigation.navigate('HomeScreen')
    }
    return(
        <View style={styles.container} >
             <FontAwesome5 name="book-reader" size={100} color='tomato' style={styles.icon} />
             <Text style={styles.header_text} >Bookshelter</Text>
            <Text>Your Name</Text>
            <View style={styles.input_container} >
            <TextInput
            onChangeText={(text) => setName(text)}
            placeholder="your name"  />
            </View>
            <Text>Your Age</Text>
            <View style={styles.input_container} >
            <TextInput 
            keyboardType='number-pad'
             onChangeText={(text) => setAge(text)}
            placeholder="your age"  />
            </View>
            <TouchableOpacity
            onPress={handleUpdateProfile}
            style={styles.button} >
                <Text style={styles.button_text} >Update Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserInfo