import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
    },
    header_container:{
        backgroundColor:colors.darkwhite,
        height:300,
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
    },
    body_container:{
        flex:3,
    },
    header_inner_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
        width:'100%',
        position:'absolute',
        bottom:30

    },
    login_text:{
        fontWeight:'bold',
        fontSize:16,
        color:'black'
    },
    email_text:{
        color:'black',
        marginTop:40,
        fontWeight:'bold',
        marginLeft:50,
    },
    input:{
        marginLeft:50,
        borderBottomWidth:1,
        paddingLeft:-2,
        borderBottomColor:'black',
        marginRight:50,
        color:'black'
    },
    login_button:{
        backgroundColor:'tomato',
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        padding:10,
        borderRadius:8,
        elevation:8,
        alignItems:'center',
        marginBottom:20
    },
    button_text:{
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    dotActive:{
        backgroundColor:'tomato',
        borderRadius:8
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
      line_container1:{
          height:1,
          borderWidth:1,
          width:'40%',
          borderColor:'black',
          
      },
      line_container:{
          flexDirection:'row',
         marginBottom:20,
          width:'100%',
          alignItems:'center',
          paddingHorizontal:20,
          justifyContent:'center'
      },
      or_text:{
          color:'black',
          marginRight:'5%',
          marginLeft:'5%'
      },
      google_button:{
         
          backgroundColor:'white',
          padding:10,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-around',
          marginRight:50,
          marginLeft:50,
          borderRadius:8,
          elevation:10
      },
      google_image:{
          width:22,
          height:22
      },
      google_text:{
          color:colors.pink,
          fontWeight:'bold',
          fontSize:16
      }
})