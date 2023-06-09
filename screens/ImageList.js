import { FlatList, ScrollView, StyleSheet, Button, View } from "react-native";
import { supabase } from "../utils";
import ImageCard from "../components/ImageCard";
import { Modal, Portal, FAB, Text, Provider } from "react-native-paper";
import VideoCard from "../components/videoCard";
import * as Notifications from "expo-notifications";
import { useState } from "react";
import ImageViewer from "../components/ImageViewer";

const handleNotification = () => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Notification Title",
      body: "Notification Body",
    },
    trigger: {
      seconds: 5,
    },
  });
};

const ImageList = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [chosenImg, setChosenImg] = useState("");
  const images = [
    {
      imgUrl: "https://source.unsplash.com/random?school",
      date: new Date("2023-03-12T00:00:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?sky",
      date: new Date("2021-07-11T12:30:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?radio",
      date: new Date("2021-03-10T09:15:00Z"),
    },
    {
      imgUrl: "https://source.un0splash.com/random?boy",
      date: new Date("2023-07-09T17:45:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?friends",
      date: new Date("2023-04-08T21:00:00Z"),
    },
    {
      imgUrl: "https://source.unsplash.com/random?love",
      date: new Date("2022-03-07T14:20:00Z"),
    },
  ];

  const videoList = [
    {
      imgUrl: "https://source.unsplash.com/random?school",
      date: new Date("2023-03-12T00:00:00Z"),
      videoUrl:
        "download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_surround-fix.avi",
    },
    {
      imgUrl: "https://source.unsplash.com/random?sky",
      date: new Date("2021-07-11T12:30:00Z"),
      videoUrl:
        "download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_surround-fix.avi",
    },
    {
      imgUrl: "https://source.unsplash.com/random?radio",
      date: new Date("2021-03-10T09:15:00Z"),
      videoUrl:
        "download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_surround-fix.avi",
    },
    {
      imgUrl: "https://source.un0splash.com/random?boy",
      date: new Date("2023-07-09T17:45:00Z"),
      videoUrl:
        "download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_surround-fix.avi",
    },
    {
      imgUrl: "https://source.unsplash.com/random?friends",
      date: new Date("2023-04-08T21:00:00Z"),
      videoUrl:
        "download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_surround-fix.avi",
    },
    {
      imgUrl: "https://source.unsplash.com/random?love",
      date: new Date("2022-03-07T14:20:00Z"),
      videoUrl:
        "download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_surround-fix.avi",
    },
  ];
  const handleClick = (imgUrl) => {
    setVisible(true);
    setChosenImg(imgUrl);
  };

  return (
    <View style={{ padding: 10 }}>
      <Button title='Trigger Notification' onPress={handleNotification} />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={{ backgroundColor: "white", padding: 20 }}
        >
          <ImageViewer imgUrl={chosenImg} />
        </Modal>
      </Portal>
      <ScrollView>
        <Text variant='displaySmall'>Track Your Memories</Text>
        <FlatList
          horizontal={true}
          data={videoList}
          renderItem={({ item }) => (
            <VideoCard
              key={item.imgUrl}
              imgUrl={item.imgUrl}
              date={item.date}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <Text variant='displaySmall'>Remember old Snaps</Text>
        {images.map((img, index) => (
          <ImageCard
            key={index}
            imgUrl={img.imgUrl}
            date={img.date}
            navigation={navigation}
            onPress={() => handleClick(img.imgUrl)}
          />
        ))}
      </ScrollView>

      <FAB
        icon='camera'
        style={styles.fab}
        onPress={() => navigation.navigate("camera")}
      />
    </View>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    padding: 5,
    right: 10,
    bottom: 10,
    zIndex: 99,
  },
});
