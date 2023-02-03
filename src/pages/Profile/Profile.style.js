import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

export default StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:colors.darkwhite,
   
  
    },
    image:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:60,
        position:'absolute',
        top:70,
        left:20,
        borderWidth:2,
        borderColor:'white'
    },
    header_container:{
      width:'100%',
      height:120,
      backgroundColor:'tomato'
    },
    edit_profile_container:{
      marginTop:20,
      alignSelf:'flex-end',
      marginRight:30,
      borderWidth:1,
      borderRadius:10,
      borderColor:'black',
      padding:8
    },
    edit_profile_text:{
      color:'black',
      fontSize:14
    },
    icon_container:{
      position:'absolute',
      top:140,
      left:90,
      backgroundColor:'white',
      borderRadius:80,
      padding:5
    },
    name_text:{
      color:'black',
      fontSize:16,
      fontWeight:'bold',
      marginLeft:20,
      marginTop:30
    },
    line_container:{
      height:2,
      backgroundColor:'#000080',
      marginTop:10
    },
    share_container:{
      flexDirection:'row',
      width:'100%',
      justifyContent:'space-around',
      padding:10
    },
    shares_text:{
      color:'black',
      fontWeight:'bold'
    },
    dot: {
      width: 80,
      height: 10,
      borderRadius: 10,
      marginHorizontal: 5,
      
      
    },
    dotGroup: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    controls: {
      position: 'absolute',
      width: '100%',
      bottom: 15,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    
    },
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding:10
    },
    logout_container:{
      position:'absolute',
      right:20,
      top:10,
      backgroundColor:'white',
      borderRadius:20,
      padding:5
    }
})