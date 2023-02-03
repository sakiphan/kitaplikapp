import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.darkwhite,
        paddingHorizontal:20,

        flex:1
    },
    input_container:{
        backgroundColor:'white',
        borderRadius:8,
        elevation:8,
        marginBottom:20,
        marginTop:8,
        paddingLeft:4
    },
    icon:{
        alignSelf:'center',
        marginTop:80
    },
    header_text:{
        marginBottom:60,
        marginTop:20,
        alignSelf:'center',
        color:'tomato',
        fontSize:20,
        fontWeight:'bold'
    },
    button:{
        alignSelf:'center',
        marginTop:40,
        backgroundColor:'white',
        elevation:8,
        alignItems:'center',
        padding:10,
        borderRadius:8,
        width:200
    },
    button_text:{
        color:'tomato',
        fontSize:16,
        fontWeight:'bold'
    }
})