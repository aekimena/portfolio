import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import IonIcons from "@expo/vector-icons/Ionicons";

export const ProjectDetails = ({ navigation, route }) => {
  const passedData = route.params.data;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#131313" }}>
      <FlatList
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <IonIcons name="arrow-back" color={"#fff"} size={25} />
            </Pressable>
            <Pressable onPress={() => Linking.openURL(passedData.link)}>
              <IonIcons name="logo-github" size={25} color={"#fff"} />
            </Pressable>
          </View>
        }
        data={passedData.gallery}
        renderItem={({ item, index }) => (
          <View key={index} style={{ marginLeft: 20 }}>
            <Image source={item} style={styles.listImage} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 50,
    paddingBottom: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listImage: {
    height: height * 0.8,
    width: 300,
    resizeMode: "contain",
  },
});
