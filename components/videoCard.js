import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Share } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const VideoCard = ({ imgUrl, date }) => {
  const shareData = async () => {
    try {
      await Share.share({
        message: "This is the demo text",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const navigation = useNavigation();
  return (
    <Card
      style={{ paddingRight: 20 }}
      onPress={() => navigation.navigate("video")}
    >
      <Card.Content>
        <Text variant='bodyMedium'>{new Date(date).toLocaleDateString()}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Download</Button>
        <Button onPress={shareData}>Share</Button>
      </Card.Actions>
    </Card>
  );
};

export default VideoCard;
