import {StyleSheet} from 'react-native'
import colors from '../../../assets/colors';

export default StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding:10
    },
    image: {
      width: 250,
      height: 250,
      backgroundColor: 'wheat',
      borderRadius: 50,
    },
    controls: {
      position: 'absolute',
      width: '100%',
      bottom: 15,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dotGroup: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dot: {
      width: 30,
      height: 10,
      borderRadius: 10,
      marginHorizontal: 5,
      borderWidth: 1.5,
      borderColor: '#ffffff',
    },
    dotActive: {
      backgroundColor: '#ffffff',
    },
    buttons: {
      fontSize: 14,
      color: '#ffffff',
      marginHorizontal: 14,
      padding: 15,
      fontWeight:'bold'
    },
    welcometext:{
        color:'white',
        fontSize:30,
        marginTop:20,
        fontWeight:'bold',
        fontFamily:'italic',
        position:'absolute',
        bottom:250
    },
    description:{
        color:'white',
        position:'absolute',
        bottom:160,
        fontSize:16
    },
    button:{
        backgroundColor:'white',
        position:'absolute',
        bottom:20,
        padding:10,
        width:100,
        alignItems:'center',
        borderRadius:8,
        right:10,
        
    },
    button_text:{
        color:colors.darkgreen,
        fontWeight:'bold',
        fontSize:16
    }
  });