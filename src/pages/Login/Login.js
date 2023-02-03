import React, { useState, createRef } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, useWindowDimensions, Image } from 'react-native'
import styles from './Login.style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {showMessage} from 'react-native-flash-message'
import ErrorMessages from "../../utils/ErrorMessages/ErrorMessages";

const Login = ({ navigation }) => {

    GoogleSignin.configure({
        webClientId: '771162241934-o1fb1tpko8up0077t3s8ffc486qsnt62.apps.googleusercontent.com',
      });

    const data = [
        {
            page: 1,
            button_text: 'Login',
            login: async () => {
                try {
                    if (email||password!='') {
                        await auth().signInWithEmailAndPassword(email, password)
                        navigation.navigate('HomeScreen')
                        
                        console.log(email)
                        console.log(password)
                    } else {
                        showMessage({
                            message:'Email or password can not be null',
                            type:'danger'
                        })
                    }
                } catch (error) {
                  showMessage({
                    message:ErrorMessages(error.code),
                    type:'danger'
                  })
                }
            }
        },
        
        {
            page: 2,
            button_text: 'Sign-up',
            login: async () => {
                try {
                    if (email||password !='') {
                        await auth().createUserWithEmailAndPassword(email, password)
                    navigation.navigate('UserInfoScreen')
                       
                    } else {
                        showMessage({
                            message:'Email or password can not be null',
                            type:'danger'
                        })
                    }
                } catch (error) {
                    showMessage({
                      message:ErrorMessages(error.code),
                      type:'danger'
                    })

                    console.log(error.code)
                  }
            }
        },
    ]


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('')
    const windowWidth = useWindowDimensions().width;
    const slider = createRef(null);
    const [sliderState, setSliderState] = useState({
        item: 0,
        offset: 0,
    });
    const slideChanged = e => {
        const item = Math.round(e.nativeEvent.contentOffset.x / windowWidth);

        setSliderState({
            item: item,
            offset: item * windowWidth,
        });
    };

    const dots = () => (
        <View style={styles.dotGroup}>
            {data.map((_, index) => (
                <View key={index} style={[styles.dot, sliderState.item === index ? styles.dotActive : null]} />
            ))}
        </View>
    );

    const switchPage = () => {
        slider.current.scrollToOffset({
            offset: sliderState.offset - windowWidth,
            animated: true,
        })
    }

    const switchPage2 = () => {
        slider.current.scrollToOffset({
            offset: sliderState.offset + windowWidth,
            animated: true,
        })
    }
    async function onGoogleButtonPress() {
        try {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        navigation.navigate('UserInfoScreen')
        return auth().signInWithCredential(googleCredential);
            
        } catch (error) {
            console.log(error)
        }
      }

    const renderItem = ({ item }) => (
        <View style={[styles.body_container, { width: windowWidth }]} >
            <Text style={styles.email_text} >E-mail</Text>
            <TextInput
                placeholder="your email..."
                placeholderTextColor='black'
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
            />
            <Text style={[styles.email_text, { marginTop: 20 }]} >Password</Text>
            <TextInput
                secureTextEntry
                placeholder="your password..."
                placeholderTextColor='black'
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity>
                {item.page == 1 ? <Text style={[styles.email_text, { marginTop: 20, textDecorationLine: 'underline' }]} >Forgot password?</Text> : null}
            </TouchableOpacity>

            <TouchableOpacity
                onPress={item.login}
                style={styles.login_button} >
                <Text style={styles.button_text} >{item.button_text}</Text>
            </TouchableOpacity>

            {item.page == 2 ? <View style={styles.line_container} >
                <View style={styles.line_container1} ></View>
                <Text style={styles.or_text} >or</Text>
                <View style={styles.line_container1} ></View>
            </View> : null}
            {item.page == 2 ?
                <TouchableOpacity onPress={onGoogleButtonPress} style={styles.google_button} >
                    <Image source={{ uri: 'https://freesvg.org/img/1534129544.png' }} style={styles.google_image} />
                    <Text style={styles.google_text} >Sign In With Google</Text>
                </TouchableOpacity> : null}
        </View>
    )
    return (
        <View style={styles.container} >
            <View style={styles.header_container}>
                <FontAwesome5 name="book-reader" size={100} color={'#000080'}/>
                <View style={styles.header_inner_container} >
                    <TouchableOpacity onPress={switchPage} >
                        <Text style={styles.login_text}  >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={switchPage2} >
                        <Text style={styles.login_text}> Sign-up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.controls} >
                    {dots()}
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                ref={slider}
                keyExtractor={(_, index) => index}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={slideChanged}
                getItemLayout={(_, index) => ({
                    length: windowWidth,
                    offset: windowWidth * index,
                    index,
                })}
            />
        </View>
    )
}
export default Login