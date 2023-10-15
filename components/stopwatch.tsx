import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import BackgroundTimer from "react-native-background-timer"

const StopwatchApp = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)

    useEffect(() => {
        if (isRunning) {
            const intervalId = BackgroundTimer.setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000)
            }, 1000)

            return () => {
                BackgroundTimer.clearInterval(intervalId)
            }
        }
    }, [isRunning])

    const startTimer = () => {
        setIsRunning(true)
    }

    const stopTimer = () => {
        setIsRunning(false)
    }

    const resetTimer = () => {
        setIsRunning(false)
        setElapsedTime(0)
    }

    const formatTime = (time: number) => {
        const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`)
        const hours = pad(Math.floor(time / 3600000))
        const minutes = pad(Math.floor((time % 3600000) / 60000))
        const seconds = pad(Math.floor((time % 60000) / 1000))
        return `${hours}:${minutes}:${seconds}`
    }

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{formatTime(elapsedTime)}</Text>
            <TouchableOpacity style={styles.button} onPress={startTimer}>
                <Text>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={stopTimer}>
                <Text>Stop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={resetTimer}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    timer: {
        fontSize: 30,
    },
    button: {
        margin: 10,
        padding: 10,
    },
})

export default StopwatchApp
