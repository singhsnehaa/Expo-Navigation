import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const _layout = () => {
  //

  const CustomeDrawerContent = (props) => {
    const pathName = usePathname();
    useEffect(() => {
      console.log(pathName);
    }, [pathName]);

    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={({ color, size }) => (
            <Feather
              name="list"
              size={24}
              color={pathName === "/feed" ? "#fff" : "#000"}
            />
          )}
          label={"Feed"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathName === "/feed" ? "#fff" : "#000" },
          ]}
          style={{ backgroundColor: pathName === "/feed" ? "#333" : "#fff" }}
          onPress={() => router.push("/(drawer)/(tabs)/feed")}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <AntDesign
              name="user"
              size={24}
              color={pathName === "/profile" ? "#fff" : "#000"}
            />
          )}
          label={"Profile"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathName === "/profile" ? "#fff" : "#000" },
          ]}
          style={{ backgroundColor: pathName === "/profile" ? "#333" : "#fff" }}
          onPress={() => router.push("/profile")}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons
              name="favorite-outline"
              size={24}
              color={pathName === "/favourite" ? "#fff" : "#000"}
            />
          )}
          label={"Favourite"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathName === "/favourite" ? "#fff" : "#000" },
          ]}
          style={{
            backgroundColor: pathName === "/favourite" ? "#333" : "#fff",
          }}
          onPress={() => router.push("/favourite")}
        />

        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons
              name="settings-outline"
              size={24}
              color={pathName === "/setting" ? "#fff" : "#000"}
            />
          )}
          label={"Settings"}
          labelStyle={[
            styles.navItemLabel,
            { color: pathName === "/setting" ? "#fff" : "#000" },
          ]}
          style={{ backgroundColor: pathName === "/setting" ? "#333" : "#fff" }}
          onPress={() => router.push("/setting")}
        />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer
      drawerContent={(props) => <CustomeDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="favourite" options={{ headerShown: true }} />
      <Drawer.Screen name="setting" options={{ headerShown: true }} />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
});
export default _layout;
