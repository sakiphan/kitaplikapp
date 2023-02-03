import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.darkwhite,
        flex:1,
    },
    add_button:{
        backgroundColor:'#000080',
        height:60,
        width:60,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:30,
        right:30,
        elevation:8
    },
    header_container:{
        backgroundColor:'tomato',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10
    },
    header_text:{
        color:'white',
        fontWeight:'bold',
        marginLeft:20
    },
    user_image:{
        height:30,
        width:30,
        borderRadius:50,
        
    },
    image_button:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:3
    }
})