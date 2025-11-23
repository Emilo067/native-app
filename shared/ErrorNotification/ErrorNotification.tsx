import {StyleSheet, View, Text, Dimensions} from "react-native";
import {Colors, Fonts} from "../tokens";
import {useEffect, useState} from "react";

interface ErrorNotificationProps {
    error?: string
}

export const ErrorNotification = ({error}: ErrorNotificationProps) => {
    const [isShow, setIsShow] = useState<boolean>(false)

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
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
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
