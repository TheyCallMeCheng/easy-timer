import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

import { StyleSheet, Text, View } from "react-native"
import Home from "./pages/home"
import Statistics from "./pages/statistics"
import Icon from "react-native-vector-icons/FontAwesome"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: () => (
                            <Icon name="home" color={"black"} size={20} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Statistics"
                    component={Statistics}
                    options={{
                        tabBarLabel: "statistics",
                        tabBarIcon: () => (
                            <Icon name="user" color={"black"} size={20} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
