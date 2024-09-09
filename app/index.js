import React from "react";
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

//In Link Button is not working.. for need to work add 'asChild' in <link> comp'
const Page = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, color: "red" }}>Welcome to our App</Text>
      <Link href={"/about"}>
        <Text style={{ fontSize: 18 }}>About Page</Text>
      </Link>
      <Link href={"/blog"} asChild>
        <Button style={{ fontSize: 18 }} title="Blog Page" />
      </Link>
      <Link href={"/contact"} asChild>
        <Button style={{ fontSize: 18 }} title="Contact Page" />
      </Link>
      {/* tabs area */}
      <Link href={"/(tabs)/feed"} asChild>
        <Button style={{ fontSize: 18 }} title="Go to Tabs" />
      </Link>
    </View>
  );
};

export default Page;
