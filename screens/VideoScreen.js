import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'

const VideoScreen = () => {
    return (
        <View>
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: ResizeMode.CONTAIN,
                    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
                defaultControlsVisible
            />
        </View>
    )
}

export default VideoScreen

const styles = StyleSheet.create({})

