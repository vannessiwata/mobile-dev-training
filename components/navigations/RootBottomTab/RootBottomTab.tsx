import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/HomeScreen";

import FontAwesome from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export const RootBottomTab: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size}></FontAwesome>
                ),
                headerShown: false
            }} />
            <Tab.Screen name="Students" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="graduation-cap" color={color} size={size}></FontAwesome>
                )
            }} />
            <Tab.Screen name="Trainers" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="chalkboard-teacher" color={color} size={size}></FontAwesome>
                )
            }} />
        </Tab.Navigator>
    );
}