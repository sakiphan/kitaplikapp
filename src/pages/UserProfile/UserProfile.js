import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import styles from './UserProfile.style'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ParseContent from "../../utils/ParseContent";
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import UserFavourites from "../../components/UserFavourites/UserFavourites";
import IonIcons from 'react-native-vector-icons/Ionicons'
const UserProfile = ({ route,navigation }) => {
    const { post } = route.params;
    const [favourites, setFavourites] = useState([])
    useEffect(() => {

        database().ref('users/' + post.user + '/Favourites').on('value', snapshot => {
            const contentData = snapshot.val();
            const newContent = ParseContent(contentData);
            setFavourites(newContent)
            console.log(post.user)

        })
    }, [])
    const renderItem = ({ item }) => <UserFavourites book={item} />
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor='tomato' />
            <ImageBackground
                source={{ uri: post.userdata[0].coverimage }}
                style={styles.header_container} >
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon_container}>
                    <IonIcons name="arrow-back" color={'black'} size={24} />
                </TouchableOpacity>
            </ImageBackground>
            <Image source={{ uri: post.userdata[0].image && post.userdata[0].image }}
                style={styles.image} />
            <Text style={styles.name_text} >{post.userdata[0].username}</Text>
            <View style={styles.line_container} ></View>
            <Text style={styles.favourites_text} >Favourite Books</Text>
            <FlatList
                data={favourites}
                renderItem={renderItem}
            />
        </View>
    )
}

export default UserProfile