import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./Cart";
import HomePage from "./HomePage";
import Qrcode from "./Qrcode";
import RedeemStore from "./RedeemStore";
import HomeIcon from '../assets/home.svg';

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator screenOptions={{
            // tabBarActiveTintColor: Colors[colorScheme].tint,
            // tabBarLabelStyle: { fontSize: 10, fontFamily: 'OpenSans-Regular'},
            tabBarStyle: {
                padding: 5,
                height: 50,
                bottom: 10,
                right: 10,
                left: 10,
                position: 'absolute',
                borderRadius: 10,
                backgroundColor: '#f4f4f9'
            }
        }}>
            <Tab.Screen name='Home' component={HomePage} options={{
                headerStyle: { backgroundColor: '#f4f4f9' },
                headerShown: false,
                tabBarIcon: (color) => <HomeIcon fill={color} height={25} width={25} />,
            }}>
            </Tab.Screen>
            <Tab.Screen name='Cart' component={Cart} options={{ headerShown: false }}></Tab.Screen>
            <Tab.Screen name='Qrcode' component={Qrcode} options={{ headerShown: false }}></Tab.Screen>
            <Tab.Screen name='RedeemStore' component={RedeemStore} options={{ headerShown: false }}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabBar;