import Friends from "../Screens/Friends";
import HomeScreen from "../Screens/HomeScreen";
import MarketPlace from "../Screens/MarketPlace";
import Notification from "../Screens/Notification";
import ProfileScreen from "../Screens/ProfileScreen";
import WatchScreen from "../Screens/WatchScreen";


export const TabData=[{
    id:1,
    name:"HomeScreen",
    route:HomeScreen,
    iconName:"home",
    iconType:"Entypo",
    size:25
},
{
    id:2,
    name:"Friends",
    route:Friends,
    iconName:"people-outline",
    iconType:"Ionicons",
    size:25
},
{
    id:3,
    name:"WatchScreen",
    route:WatchScreen,
    iconName:"ondemand-video",
    iconType:"MaterialIcons",
    size:25
},
{
    id:4,
    name:"MarketPlace",
    route:MarketPlace,
    iconName:"storefront-outline",
    iconType:"Ionicons",
    size:25
},
{
    id:5,
    name:"Notification",
    route:Notification,
    iconName:"bell",
    iconType:"SimpleLineIcons",
    size:25
},
{
    id:6,
    name:"ProfileScreen",
    route:ProfileScreen,
    iconName:"user",
    iconType:"AntDesign",
    size:25
}]