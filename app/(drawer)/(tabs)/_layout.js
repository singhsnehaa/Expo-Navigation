import { AntDesign, Feather } from "@expo/vector-icons";
import { Button } from "react-native";
import { Tabs, router } from "expo-router";
import React from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor="black" />,
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: () => {
            <Feather name="list" size={24} color={"red"} />;
          },
          tabBarLabel: "Feed",
          headerTitle: "Feed",
          headerRight: () => (
            <Button title="Add Post" onPress={() => router.push("/feed/new")} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => {
            <AntDesign name="user" size={24} color={"green"} />;
          },
          tabBarLabel: "Profile",
          headerTitle: "Profile",
        }}
      />
    </Tabs>
  );
};

export default _layout;
