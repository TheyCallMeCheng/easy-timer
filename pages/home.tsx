import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import StopwatchApp from "../components/stopwatch"

export default function Home() {
    return (
        <View style={styles.container}>
            <StopwatchApp />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    startButton: {
        alignItems: "center",
        justifyContent: "center",
    },
})
