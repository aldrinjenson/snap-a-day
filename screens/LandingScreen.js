import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

const LandingScreen = (navigation) => {
    return (
        <Button icon="camera" mode="contained" onPress={() => { }}>
            Press me
        </Button>
    )
}

export default LandingScreen

const styles = StyleSheet.create({})