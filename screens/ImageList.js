import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { supabase } from "../utils";
import ImageCard from "../components/ImageCard";
import { Text } from "react-native-paper";
import VideoCard from "../components/videoCard";

const ImageList = () => {
  // const getImages = async () => {
  //   const { data, error } = await supabase.storage.from("snaps-bucket").list({
  //     limit: 100,
  //     offset: 0,
  //     sortBy: { column: "name", order: "asc" },
  //   });
  //   console.log(data, error);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []);

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

  return (
    <View style={{ padding: 10 }}>
      <Text>Checkout your memories</Text>
      <FlatList
        horizontal={true}
        data={videoList}
        renderItem={({ item }) => (
          <VideoCard imgUrl={item.imgUrl} date={item.date} />
        )}
        keyExtractor={(item) => item.id}
      />
      <ScrollView>
        {images.map((img, index) => (
          <ImageCard key={index} imgUrl={img.imgUrl} date={img.date} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ImageList;

const styles = StyleSheet.create({});
