import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();

export const RootBottomTab: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Students" component={HomeScreen} />
        </Tab.Navigator>
    );
}