import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TextInput, FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from "../../../assets/colors";
import styles from './Home.style'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import axios from 'axios'
import BookCard from "../../components/BookCard/BookCard";
import SearchedBookCard from "../../components/SearchedBookCard/SearchedBookCard";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth'

const Psychology = 'https://www.googleapis.com/books/v1/volumes?q=subject:psychology&maxResults=20&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const Political = 'https://www.googleapis.com/books/v1/volumes?q=subject:political&maxResults=20&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const Philosophy = 'https://www.googleapis.com/books/v1/volumes?q=subject:philosophy&maxResults=20&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const History = 'https://www.googleapis.com/books/v1/volumes?q=subject:history&maxResults=20&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const Home = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [politicalData, setPoliticalData] = useState([])
    const [philosophyData, setPhilosophyData] = useState([])
    const [historyData, setHistoryData] = useState([])
    const [psychologyData, setPsychologyData] = useState([])
    const [resultData, setResultData] = useState([])
    const [search, setSearch] = useState('')
    const result = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk`

    useEffect(() => {
        async function fetchdata() {
            await axios.get(Political).then((response) => {
                setPoliticalData(response.data)
            }
            )
            await axios.get(Philosophy).then((response) => {
                setPhilosophyData(response.data)
            })
            await axios.get(History).then((response) => {
                setHistoryData(response.data)
            })
              setLoading(false)
             axios.get(Psychology).then((response) => {
                setPsychologyData(response.data)
            })
            
        }
        fetchdata()
    }, [])

    const handleSearch = async (text) => {
        try {
            await setSearch(text)
            axios.get(result).then((response) => {
                setResultData(response.data)
            
            })

            const filtered = resultData.filter((book) => {
                const current = book.items.volumeInfo.title
                return current.indexOf(text) > -1
            })
            text ? setResultData(filtered) : setResultData([])
        } catch (error) {
            console.log(error)
        }
    }

    const goBookDetail = (book) => {
        navigation.navigate('BookDetailScreen', { book })
    }


    const renderItem = ({ item }) => <BookCard book={item} handleDetail={goBookDetail} />
    return (
        <ScrollView style={styles.container} >
            <StatusBar backgroundColor={colors.darkwhite} />
            <Text style={styles.header_text} >Bookshelter</Text>
            <View style={styles.input_container} >
                <EvilIcons name="search" color='black' size={30} />
                <TextInput
                    style={{ width: 280 }}
                    value={search}
                    autoCapitalize='none' placeholder="search for books..." onChangeText={handleSearch} />
            </View>
            { loading ? <ActivityIndicator size={'large'} /> :
            !search  ? <><Text style={styles.karlmarx_text} >Political</Text>
                <View style={styles.flatlist_container} >
                    <FlatList
                        horizontal
                        data={politicalData.items}
                        renderItem={renderItem}
                    />
                </View>
                <Text style={styles.karlmarx_text} >Philosophy</Text>
                <View style={styles.flatlist_container} >
                    <FlatList
                        horizontal
                        data={philosophyData.items}
                        renderItem={renderItem}
                    />
                </View>
                <Text style={styles.karlmarx_text} >History</Text>
                <View style={styles.flatlist_container} >
                    <FlatList
                        horizontal
                        data={historyData.items}
                        renderItem={renderItem}
                    />
                </View>
                <Text style={styles.karlmarx_text} >Psychology</Text>
                <View style={styles.flatlist_container} >
                    <FlatList
                        horizontal
                        data={psychologyData.items}
                        renderItem={renderItem}
                    />
                </View></>
                :
                <FlatList
                    style={{ marginTop: 20 }}
                    numColumns={3}
                    data={resultData.items}
                    renderItem={({ item }) => <SearchedBookCard book={item} onPress={goBookDetail} />}
                />
            }

        </ScrollView>
    )
}

export default Home;