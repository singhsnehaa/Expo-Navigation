import React from "react";
import { View, Button } from "react-native";
import { router, Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "pink" },
        headetTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button title="Contact" onPress={() => router.push("contact")} />
          ),
        }}
      />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen
        name="blog/index"
        options={{ headerTitle: "All Blog Posts" }}
      />
      <Stack.Screen
        name="contact"
        options={{ headerTitle: "Contact", presentation: "modal" }}
      />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
