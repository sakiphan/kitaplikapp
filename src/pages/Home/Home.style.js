import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.darkwhite,
        flex:1,
        
    },
    header_text:{
        color:'tomato',
        alignSelf:'center',
        fontSize:24,
        marginTop:20,
        fontWeight:'bold',
        
    },
    input_container:{
        flexDirection:'row',
        backgroundColor:'white',
        elevation:12,
        marginHorizontal:10,
        paddingLeft:10,
        height:40,
        marginTop:10,
        borderRadius:8,
        alignItems:'center',
      
    },
    flatlist_container:{
        backgroundColor:'white',
        elevation:20,
        marginHorizontal:10,
        borderRadius:8,
        flex:1,
        marginBottom:20
        
    },
    karlmarx_text:{
        marginLeft:10,
        marginTop:20,
        marginBottom:10,
        fontWeight:'bold',
        fontSize:16
    }
   
})