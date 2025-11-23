import {Animated, Dimensions, StyleSheet, Text} from "react-native";
import {Colors, Fonts} from "../tokens";
import {useEffect, useState} from "react";

interface ErrorNotificationProps {
    error?: string
}

export const ErrorNotification = ({error}: ErrorNotificationProps) => {
    const animatedValue = new Animated.Value(-100)
    const [isShow, setIsShow] = useState<boolean>(false)

    const onEnter = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        if(!error) {
            return;
        }
        setIsShow(true)
        const timerId = setTimeout(() => {
            setIsShow(false)
        }, 3000)

        return () => {
            clearTimeout(timerId)
        }
    }, [error])

    if(!isShow) {
        return <></>
    }
    return (
        <Animated.View style={{...styles.container, transform: [
                {translateY: animatedValue}
            ]}} onLayout={onEnter}>
            <Text style={styles.text}>{error}</Text>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: Dimensions.get('screen').width,
        top: 50,
        backgroundColor: Colors.red,
        padding: 15

    },
    text: {
        fontSize: Fonts.f16,
        color: Colors.white,
        textAlign: "center"
    }
})
