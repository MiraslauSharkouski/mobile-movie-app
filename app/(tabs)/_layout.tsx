import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text } from "@react-navigation/elements";
import { Tabs } from "expo-router";
import { Image, ImageBackground, View } from "react-native";

const TabIcon = ({ focused, iconSource, title }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[90px] min-h-16 mt-4 justify-center gap-2 items-center rounded-3xl overflow-hidden"
      >
        <Image source={iconSource} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center item-center mt-4 rounded-3xl">
      <Image source={iconSource} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 24,
          marginHorizontal: 20,
          marginBottom: 48,
          maxHeight: 50,
          position: "absolute",
          overflow: "hidden",
          //   borderWidth: 1,
          //   borderColor: "0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconSource={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconSource={icons.search}
              title="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconSource={icons.save} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconSource={icons.person}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
