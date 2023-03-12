import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import Button from '../Components/Button';

const PhotoScreen = () => {

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
  const cameraRef = useRef(null)

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus == 'granted')
    })();
  }, [])


  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data)
        setImage(data.uri)
      } catch (e) {
        console.log(e)
      }
    }
  }

  // if (hasCameraPermission == false) {
  //     return (<Text>Permission to access camera not granted</Text>)
  // }

  return (
    <View style={styles.container}>
      {!image ?
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
          ratio='16:9'
        >
          <View style={{
            alignItems: 'flex-start',
            paddingTop: 30,
            paddingHorizontal: 20

          }}>
            <Button icon={'flash'}
              color={flash === Camera.Constants.FlashMode.off ? '#f1f1f1' : 'gold'}
              onPress={() => {
                setFlash(flash === Camera.Constants.FlashMode.off ?
                  Camera.Constants.FlashMode.on
                  : Camera.Constants.FlashMode.off
                )
              }} />
          </View>
        </Camera>
        :
        <Image source={{ uri: image }} style={styles.camera} />
      }
      <View>
        {image ?
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 50
          }}>
            <Button title={"Re-Take"} icon="retweet" onPress={() => setImage(null)} />
            <Button title={"Save"} icon="check" />

          </View>
          :
          <Button title={'Take a Picture'} icon="camera" onPress={takePicture} />
        }
      </View>
    </View>
  )
}

export default PhotoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center'
  },
  camera: {
    flex: 1,
  }
})