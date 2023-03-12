import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

const VideoCard = ({ imgUrl, date }) => {
  console.log(imgUrl);
  return (
    <Card style={{ paddingRight: 20 }}>
      <Card.Content>
        <Text variant='bodyMedium'>{new Date(date).toLocaleDateString()}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default VideoCard;
