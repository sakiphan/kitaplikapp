import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import styles from './FavouriteCard.style'
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const FavouriteCard = ({ book, handleDetail,removeItem }) => {
    const { width: SCREEN_WIDTH } = Dimensions.get('window')
    const TRANSLATE_X_ICON = -SCREEN_WIDTH * .3
    const translateX = useSharedValue(0)
    const gestureHandler = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX
        },
        onEnd: () => {
            const sholdBe = translateX.value < TRANSLATE_X_ICON
            if (sholdBe) {
                translateX.value = withTiming(-70)
            } else {
                translateX.value = withTiming(0)
            }
            
        }
    })

    const rStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value
        }]
    }))
    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <PanGestureHandler onGestureEvent={gestureHandler} >
                <Animated.View onPress={() => handleDetail(book)} style={[styles.container, rStyle]} >
                    {book.volumeInfo.imageLinks != undefined ? <Image source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                        style={styles.image} /> :
                        <Image source={{ uri: 'https://www.kannemeinel.com/uploads/3/4/3/9/34391167/5133754_orig.jpg' }} style={styles.image} />
                    }
                    <View style={styles.inner_container} >
                        <Text numberOfLines={1} style={styles.header_text} >{book.volumeInfo.title}</Text>
                        <Text numberOfLines={1} style={styles.header_text} >{book.volumeInfo.authors[0]}</Text>
                    </View>
                </Animated.View>
            </PanGestureHandler>
            <View style={innerstyles.icon_container} >
                <FontAwesome5 onPress={() => removeItem(book)}  name='trash-alt' size={24} color='red' />
            </View>
        </GestureHandlerRootView>
    )
}

const innerstyles = StyleSheet.create({
    icon_container: {
        height: 60,
        width: 70,
        position: 'absolute',
        right: 10,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavouriteCard