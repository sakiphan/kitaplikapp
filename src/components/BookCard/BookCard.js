import React from "react";
import {TouchableOpacity ,Text,Image} from 'react-native'
import styles from './BookCard.style'

const BookCard = ({book,handleDetail}) => {
    return(
        <TouchableOpacity onPress={() => handleDetail(book)} style={styles.container} >
            {book.volumeInfo.imageLinks != undefined ?<Image source={{uri:book.volumeInfo.imageLinks.thumbnail}} 
            style={styles.image} />:
            <Image source={{uri:'https://www.kannemeinel.com/uploads/3/4/3/9/34391167/5133754_orig.jpg'}} style={styles.image} />
            }
            <Text numberOfLines={2} style={styles.book_text} >{book.volumeInfo.title}</Text>
        </TouchableOpacity>
    )
}

export default BookCard