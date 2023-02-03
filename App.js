import React,{useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { LogBox } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import auth from '@react-native-firebase/auth' 
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import Welcome from './src/pages/Welcome/Welcome';
import BookDetail from './src/pages/BookDetail/BookDetail';
import Profile from './src/pages/Profile/Profile';
import Favourites from './src/pages/Favourites/Favourites';
import FlashMessage from "react-native-flash-message";
import UserInfo from './src/pages/UserInfo/UserInfo';
import Social from './src/pages/Social/Social';
import UserProfile from './src/pages/UserProfile/UserProfile';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const currentUser = auth().currentUser
const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    
  }, [])
  const TabStack = () => {
    return(
      <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon:({focused , color , size}) => {
            let iconName;
            if (route.name==='Home') {
                iconName='home'
            }
            if (route.name==='Profile') {
                iconName='user'
            }
            if(route.name==='Favourites') {
              iconName='heart'
            }
            if(route.name==='Social') {
              iconName='slideshare'
            }
            return <FontAwesome name={iconName} color={color} size={24} />
        },
        tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: 'gray',
         headerShown:false,
         tabBarActiveBackgroundColor:'white',
         tabBarStyle:{backgroundColor:'white'},
         tabBarHideOnKeyboard:true  
    }) } >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Favourites' component={Favourites} />
        <Tab.Screen name='Social' component={Social} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
    )
  }
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
      { !currentUser && <Stack.Screen name='WelcomeScreen' component={Welcome} />  }
        <Stack.Screen name='HomeScreen' component={TabStack} />
        <Stack.Screen name='UserInfoScreen' component={UserInfo} />
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='BookDetailScreen' component={BookDetail} />
        <Stack.Screen name='UserProfileScreen' component={UserProfile} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}
export default App