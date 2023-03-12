import * as React from "react";
import { View, Image } from "react-native";

const ImageViewer = ({ imgUrl }) => {
  console.log(imgUrl);

  return (
    <View
      style={
        {
          // maxWidth: "90%",
          // maxHeight: "90%",
        }
      }
    >
      <Image
        // style={styles.tinyLogo}
        // source={require("@expo/snack-static/react-native-logo.png")}
        style={{
          width: "100%",
          height: "100%",
        }}
        source={{ uri: imgUrl }}
      />
    </View>
  );
};

export default ImageViewer;
