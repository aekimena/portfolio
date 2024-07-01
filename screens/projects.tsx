import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { projectsList } from "../utils/projectsList";

export const Projects = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#131313" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
          <View>
            <Image
              source={require("../assets/aekimena-image.jpg")}
              style={styles.aekimena_img}
            />
          </View>
          <Text style={{ fontSize: 34, fontFamily: "Bold", color: "#fff" }}>
            My Projects
          </Text>
        </View>
        <View style={{ marginTop: 50, gap: 20, paddingHorizontal: 20 }}>
          {projectsList.map((item, index) => (
            <Pressable
              onPress={() =>
                navigation.navigate("ProjectDetails", { data: item })
              }
              key={index}
              style={styles.listCont}
            >
              <Text style={{ fontSize: 18, fontFamily: "Bold", color: "#fff" }}>
                {item.title}
              </Text>
              <Text style={styles.listBodyTxt}>{item.body}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  aekimena_img: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginBottom: 20,
  },
  listCont: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#282828",
    padding: 20,
    borderRadius: 10,
    gap: 20,
    justifyContent: "center",
  },
  listBodyTxt: {
    fontSize: 14,
    fontFamily: "Regular",
    color: "#fff",
    lineHeight: 20,
  },
});
