import React, {useState, createRef} from 'react';
import {View, Text, FlatList, StyleSheet, useWindowDimensions, Image, TouchableOpacity,StatusBar} from 'react-native';
import WelcomeMessage from '../../components/WelcomeLottie/WelcomeMessage';
import styles from './Welcome.style'
import colors from '../../../assets/colors';

// Data will be used to compose our slides
const data = [
  {
    color: colors.darkgreen,
    source: require('../../../assets/reading.json'),
    pagenumber:1,
    description:'“Think before you speak. Read before you think.” - Fran Lebowitz'
  },
  {
    color: colors.darkgreen,
    source: require('../../../assets/reading2.json'),
    pagenumber:2,
    description:'“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” - George R.R. Martin'
  },
  
];

const Welcome = ({navigation}) => {
  const [activePage,setActivePage] = useState(1)
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

 
  const renderer = ({item}) => (
    <View style={{width: windowWidth}}>
      <View style={{...styles.slide, backgroundColor: item.color}}>
      {item.pagenumber===1?<Text style={styles.welcometext} >Bookshelter</Text>:null}
        <WelcomeMessage mysource={item.source} />
        <Text style={styles.description} >{item.description}</Text>
      </View>
    </View>
  );

 
  const button = direction => (
    <TouchableOpacity
      onPress={() =>
        {direction === 'NEXT' ? 
        slider.current.scrollToOffset({
            offset: direction === 'BACK' ? sliderState.offset - windowWidth : sliderState.offset + windowWidth,
            animated: true,
          }) : navigation.navigate('LoginScreen')
          
    } 
       
 
      }>
      <Text style={styles.buttons}>{direction}</Text>
    </TouchableOpacity>
  );

 
  const dots = () => (
    <View style={styles.dotGroup}>
      {data.map((_, index) => (
        <View key={index} style={[styles.dot, sliderState.item === index ? styles.dotActive : null]} />
      ))}
    </View>
  );

  return (
    <>
    <StatusBar backgroundColor={colors.darkgreen} />
      <FlatList
        data={data}
        renderItem={renderer}
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
      <View style={styles.controls}>
        {button('NEXT')}
        {dots()}
        {button('LOGIN')}
      </View>
    </>
  );
};



export default Welcome;