import * as React from "react";
import { Share } from "react-native";
import { Avatar, Button, Card, Portal, Text, Modal } from "react-native-paper";

// const [visible, setVisible] = React.useState(false);

// const showModal = () => setVisible(true);

// const hideModal = () => setVisible(false);


const VideoCard = ({ imgUrl, date }) => {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const shareData = async () => {
    try {
      await Share.share({
        message: "This is the demo text",
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal}>
        <Text>Example Modal</Text>
      </Modal>
      <Card style={{ paddingRight: 20 }} onLongPress={setVisible(true)}>
        <Card.Content>
          <Text variant='bodyMedium'>{new Date(date).toLocaleDateString()}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Download</Button>
          <Button onPress={shareData}>Share</Button>
        </Card.Actions>
      </Card>
    </Portal>
  );
};

export default VideoCard;
