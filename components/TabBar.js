import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./Cart";
import HomePage from "./HomePage";
import Qrcode from "./Qrcode";
import RedeemStore from "./RedeemStore";
import HomeIcon from '../assets/home.svg';
import CartIcon from '../assets/bagheart.svg';
import QRIcon from '../assets/qr-code.svg';
import RedeemIcon from '../assets/redeem.svg';

const Tab = createBottomTabNavigator();

const tabBarColor = '#66A05F';

const TabBar = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: tabBarColor,
            tabBarLabelStyle: { fontSize: 10 },
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
                tabBarIcon: ({ color }) => <HomeIcon fill={color} height={25} width={25} />,
            }}>
            </Tab.Screen>
            <Tab.Screen name='Cart' component={Cart} options={{
                headerStyle: { backgroundColor: '#f4f4f9' },
                headerShown: false,
                tabBarIcon: ({ color }) => <CartIcon fill={color} height={25} width={25} />,
            }}>
            </Tab.Screen>
            <Tab.Screen name='Qrcode' component={Qrcode} options={{
                headerStyle: { backgroundColor: '#f4f4f9' },
                headerShown: false,
                tabBarIcon: ({ color }) => <QRIcon fill={color} height={25} width={25} />,
            }}>
            </Tab.Screen>
            <Tab.Screen name='RedeemStore' component={RedeemStore} options={{
                headerStyle: { backgroundColor: '#f4f4f9' },
                headerShown: false,
                tabBarIcon: ({ color }) => <RedeemIcon fill={color} height={25} width={25} />,
            }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabBar;