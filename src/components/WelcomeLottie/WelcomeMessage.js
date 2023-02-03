import React from "react";
import AnimatedLottieView from "lottie-react-native";

const WelcomeMessage = ({autoPlay,mysource}) => {
    return(
        <AnimatedLottieView
         source={mysource}
         autoPlay
         style={{width:400,position:'absolute',top:50,right:-10}}
        />
    )
}
export default WelcomeMessage