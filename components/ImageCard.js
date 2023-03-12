import { StyleSheet, View } from "react-native";

import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon='folder' />;

const ImageCard = ({ onPress, imgUrl, date }) => {
  return (
    <Card onPress={onPress}>
      <Card.Content>
        <Text variant=''>{new Date().toLocaleString()}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: imgUrl }} />
      <Card.Actions>
        <Text>Source: Nokia 8.1</Text>
        {/* <Button>Cancel</Button>
        <Button>Ok</Button> */}
      </Card.Actions>
    </Card>
  );
};

export default ImageCard;

const styles = StyleSheet.create({});
