import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <FontAwesome name="home" size={24} color={color} />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Entypo name="login" size={24} color={color} />
            ) : (
              <AntDesign name="login" size={24} color="black" />
            );
          },
        }}
      />
    </Tabs>
  );
}
