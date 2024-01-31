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
    activeIconName:"home",
    activeIconType:"Foundation",
    size:30,
    unFocusSize:25,
    unActiveIconName:"home",
    unActiveIconType:"Octicons",
},
{
    id:2,
    name:"Friends",
    route:Friends,
    unActiveIconName:"people-outline",
    unActiveIconType:"Ionicons",
    size:25,
    unFocusSize:25,
    activeIconName:"people",
    activeIconType:"Ionicons"
},
{
    id:3,
    name:"WatchScreen",
    route:WatchScreen,
    unActiveIconName:"ondemand-video",
    unactiveIconType:"MaterialIcons",
    size:26,
    unFocusSize:25,
    activeIconName:"youtube-tv",
    activeIconType:"MaterialCommunityIcons"
},
{
    id:4,
    name:"MarketPlace",
    route:MarketPlace,
    unActiveIconName:"storefront-outline",
    unActiveIconType:"Ionicons",
    size:25,
    unFocusSize:25,
    activeIconName:"storefront",
    activeIconType:"Ionicons"
},
{
    id:5,
    name:"Notification",
    route:Notification,
    unActiveIconName:"bell",
    unActiveIconType:"SimpleLineIcons",
    size:25,
    unFocusSize:25,
    activeIconName:"bell-fill",
    activeIconType:"Octicons"
},
{
    id:6,
    name:"ProfileScreen",
    route:ProfileScreen,
    unActiveIconName:"user",
    unActiveIconType:"AntDesign",
    size:25,
    unFocusSize:25,
    activeIconName:"user",
    activeIconType:"FontAwesome"
}]